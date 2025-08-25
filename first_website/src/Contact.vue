<script>

  export default {
    data() {
      return {
        name: "",
        email: "",
        message: "",
        sent: false,
        submitted: false,
        loading: false,
        info: ""
      }
    },
    methods: {
      async submit() {
        if ((this.name == "") || (this.email == "") || (this.message == "")) {
          this.info = "Please include all fields!"
        } else {
          this.info = "";
          this.loading = true;
          this.sent = true;

          const formData = {
            name: this.name,
            email: this.email,
            message: this.message
          }

          // Attempt to send post request
          try {
            const response = await fetch('api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formData)
            });

            if (response.ok) {
              this.loading = false;
              this.info = "Message sent! I'll get back to you shortly."
            } else {
              // server side error
              this.loading = false;
              this.info = "Server side error. Please try again later!"
            }
          } catch (error) {
            // server side error
            this.loading = false;
            this.info = "An error occuered! Check your internet connection or refresh the page"
          } 
        }
      }
    }
  }
</script>


<template>
  <div class="contact_box">
    <div class="form_contents"
      v-if="!sent"
      v-motion
      :initial="{ opacity: 1 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
    >
        <div class="input_chunk">
          Name
          <input class="line_input" v-model="name" />
        </div>
        <div class="input_chunk">
          Email
          <input class="line_input" v-model="email" /> 
        </div>
        <div class="input_chunk">
          Message
          <textarea v-model="message" />
        </div>
        <button @click="submit">
          Submit
        </button>
    </div>
    <div
      v-if="loading"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
    >
      <img src="/loading.gif" style="width: 100px;"/>
    </div>
    <div
      v-if="info != ''"
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
      :duration="1000"
    >
      {{ info }}
    </div>
  </div>
</template>


<style>


input {
  font-family: Georgia, serif;
  font-size: 23px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 3px;
  transition: 0.3s;
}

textarea {
  font-family: Georgia, serif;
  font-size: 23px;
  width: 600px;
  height: 160px;
  resize: both;
  border: 1px solid lightgrey;
  border-radius: 3px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 3px;
  transition: 0.3s;
}

input:hover {
  border: 1px solid grey;
}

textarea:hover {
  border: 1px solid grey;
}

button {
  font-family: Georgia, serif;
  font-size: 23px;
  background-color: mediumseagreen;
  border: 0px;
  width: 616px;
  margin-top: 20px;
  margin-bottom: 10px;
  height: 50px;
  transition: 0.3s;
}

button:hover {
  background-color: #349E63;
}

.contact_box {
  font-family: Georgia, serif;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border: 1px solid lightgrey;
  background-color: white;
}

.input_chunk {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.line_input {
  height: 50px;
  width: 600px;
  margin-bottom: 10px;
}

@media (max-width: 750px) {
  .contact_box {
    width: 90vw;
    padding: 5px;
  }

  input {
    width: 80vw;
    font-size: 16px;
  }

  textarea {
    width: 80vw;
    font-size: 16px;
  }

  .input_chunk {
    width: 80vw;
  }

  .line_input {
    width: 80vw;
  }

  button {
    width: 80vw;
  }
}

</style>
