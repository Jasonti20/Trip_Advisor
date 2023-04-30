require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const admin = require("firebase-admin");
const cors = require("cors");

const serviceAccount = require("./serviceAccountKey.json");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://plan.firebaseio.com",
});

app.use(cors());

// Parse incoming request bodies
app.use(express.json());

// // Serve the static files from the Vue.js app
// app.use(express.static(path.join(__dirname, "../vue/dist")));

// // Handle production
// if (process.env.NODE_ENV === "production") {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, "../vue/dist")));

//   // Handle Vue.js routing, return all requests to Vue app
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../vue/dist/index.html"));
//   });
// }

app.get("/test-chatgpt", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: "Hello,",
        max_tokens: 5,
        model: "text-davinci-002",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    res.send(response.data);
  } catch (error) {
    console.log("Error calling ChatGPT API:", error);
    res.status(500).send("Error calling ChatGPT API");
  }
});

app.post("/submit-form", async (req, res) => {
  console.log("Received form data:", req.body);

  try {
    // Pass form data to ChatGPT and get response
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt:
          "Generate a travel plan for [destination] between [rangeTimePicker] based on the [personality] under 50 words" +
          JSON.stringify(req.body),
        temperature: 0.7,
        max_tokens: 256,
        model: "text-davinci-002",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    // Get response text from ChatGPT and save to JSON
    const choices = response.data.choices;
    const responseText =
      choices && choices[0] && choices[0].text ? choices[0].text.trim() : "";
    const responseData = {
      form_data: req.body,
      chat_response: responseText,
    };

    console.log("ChatGPT response:", responseText);

    // Send JSON response back to client
    res.json(responseData);
  } catch (error) {
    console.log("Error calling ChatGPT API:", error);
    res.status(500).send("Error calling ChatGPT API");
  }
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
