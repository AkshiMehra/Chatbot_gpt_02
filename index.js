// const express = require('express')
// const app = express()
// const axios = require('axios');
// const { Configuration, OpenAIApi } = require("openai");

// app.use('/static', express.static(__dirname + '/views'));
// app.use('/public',express.static(__dirname, + '/public'));

// const server = app.listen(5000)

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// app.get('/chat', async (req, res) => {
//     const userInput = req.query.userInput; // Get the user input from the query parameters
//     print(userInput);
//     // Set up your OpenAI configuration
//     const openaiConfig = new Configuration({
//       apiKey: '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',
//     });
  
//     // Create an instance of the OpenAI API
//     const openai = new OpenAIApi(openaiConfig);
  
//     // Define your OpenAI chat/completion parameters
//     const params = {
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a helpful assistant.' },
//         { role: 'user', content: userInput },
//       ],
//     };
  
//     try {
//       // Call the OpenAI API to get the completion response
//       const response = await openai.complete(params);
  
//       // Extract the generated message from the API response
//       const message = response.choices[0].message.content;
  
//       // Send the message back to the frontend
//       res.send(message);
//     } catch (error) {
//       console.error('OpenAI API request failed:', error);
//       res.status(500).send('An error occurred.');
//     }
//   });

import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization: "org-0nmrFWw6wSm6xIJXSbx4FpTw",
    apiKey: "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",
  });

const openai = new OpenAIApi(configuration);

openai
  .createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });