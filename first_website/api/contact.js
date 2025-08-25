
import nodemailer from "nodemailer"
import { google } from "googleapis"
import dotenv from "dotenv";

dotenv.config()

const { GMAIL_USER, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;

const OAuth2 = google.auth.OAuth2
const OAuth2_client = new OAuth2(CLIENT_ID, CLIENT_SECRET)
OAuth2_client.setCredentials({ refresh_token: REFRESH_TOKEN })

function html_message(name, email, message) {
    return `
        <h3> ${name} - ${email} says...</h3>
        <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5;">
          ${message.replace(/\n/g, '<br>')}
        </body>
    `
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(404).json({ error: "Non-post call to send email api call" });
  }

  console.log("GMAIL USER" + GMAIL_USER)

  const { name, email, message } = req.body;
  const accessToken = OAuth2_client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: GMAIL_USER,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken
    }
  })
  
  console.log("generated transporter")

  const msg_subject = `${name}: ${message.slice(0,25)}...`;

  const mail_options = {
    from: `${email} <${name}>`,
    to: GMAIL_USER,
    subject: msg_subject,
    html: html_message(name, email, message)
  }

  console.log("trying to send message")

  try {
    const result = await transporter.sendMail(mail_options)
    console.log("Success: ", result)
  } catch (error) {
    console.log("Error: ", error)
  }

  console.log("passed send message section")

  res.status(200).send();
}
