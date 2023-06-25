const SpeechRecognition = window.SpeechRe || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;


document.querySelector('button').addEventListener('click', () => {
    recognition.start();
  });

recognition.addEventListener('result', (e) => {
    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;
  
    console.log(text);
    console.log('Confidence: ' + e.results[0][0].confidence);
    // Assuming you have a text input field with an id "userInput"
    const userInput = text;

    // Make an HTTP GET request to the /chat endpoint
    // fetch(`chat?userInput=${encodeURIComponent(userInput)}`)
    // .then(response => response.text())
    // .then(message => {
    //     // Do something with the response message
    //     console.log('Response:', message);
    // })
    // .catch(error => {
    //     console.error('Request failed:', error);
    // });
    
    // const socket = io();
    // socket.emit('chat message', text);

    // We will use the Socket.IO here later…
    

    // async function generateText(prompt) {
    // try {
    //     const response = await fetch('https://api.openai.com/v1/completions', {
    //     model : "text-davinci-003",
    //     message : prompt,
    //     max_tokens: 100, // Adjust the number of tokens as per your desired response length
    //     n: 1, // Generate a single response
    //     temperature: 0.7, // Adjust the temperature for controlling randomness
    //     }, 
        
    //     {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer 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`, // Replace 'your-api-key' with your actual OpenAI API key
    //     },
    //     });

    //     console.log(response);
    //     const generatedText = response.data.choices[0].text.trim();
    //     console.log(generatedText);
    //     return generatedText;
    // } catch (error) {
    //     console.error('Failed to generate text:', error);
    //     return null;
    // }
    // }

    // // Example usage
    // const prompt = `Write a compelling story about an unexpected friendship between a cat and a mouse.`;
    // generateText(prompt)
    // .then((text) => {
    //     console.log('Generated text:', text);
    // })
    // .catch((error) => {
    //     console.error('Failed to generate text:', error);
    // });
});