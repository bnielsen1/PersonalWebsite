const sqlite3 = require('sqlite3').verbose()

// Init database
const db = new sqlite3.Database('portfoloio.db', (err) => {
  if (err) {
    console.error("Failed to open database on server start")
  } else {
    console.log("Successfully opened database")
  }
})

// Processes delimted string to array of strings
function delimit_str(input) {
    buffer = "";
    output = [];
    for (let char of input) {
      if (char != ';') {
        buffer += char;
      } else {
        output.push(buffer);
        buffer = "";
      }
    }
    output.push(buffer);

    return output;
}


// Start server
const express = require('express')
const cors = require('cors');
const nodemailer = require('nodemailer')

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Setup email transporter

const config = require('./config.js')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2

const OAuth2_client = new OAuth2(config.clientId, config.clientSecret)
OAuth2_client.setCredentials({ refresh_token: config.refreshToken })

function html_message(name, email, message) {
    return `
        <h3> ${name} - ${email} says...</h3>
        <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
          ${message.replace(/\n/g, '<br>')}
        </body>
    `
}

function send_email(name, email, message) {
   const accessToken = OAuth2_client.getAccessToken()

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: config.user,
            clientId: config.clientId,
            clientSecret: config.clientSecret,
            refreshToken: config.refreshToken,
            accessToken: config.accessToken
        }
    });

    const msg_subject = `${name}: ${message.slice(0,25)}...`;

    const mail_options = {
        from: `${email} <${name}>`,
        to: config.user,
        subject: msg_subject,
        html: html_message(name, email, message)
    }

    transporter.sendMail(mail_options, (error, result) => {
        if (error) {
            console.log('Error: ', error)
        } else {
            console.log('Success: ', result)
        }
        transporter.close()
    })
}

// Route definitions
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/projects', (req, res) => {
  db.all('SELECT * FROM project', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const formatted_data = rows.map(row => ({
      ...row,
      colors: delimit_str(row.colors),
      frameworks: delimit_str(row.frameworks),
      skills: delimit_str(row.skills)
    }));

    res.json(formatted_data);
  })
})

app.get('/experiences', (req, res) => {
  db.all('SELECT * FROM experience', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const formatted_data = rows.map(row => ({
      ...row,
      colors: delimit_str(row.colors),
      skills: delimit_str(row.skills),
    }));

    res.json(formatted_data);
  })
})

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(name);
  console.log(email);
  console.log(message);

  send_email(name, email, message)

  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
