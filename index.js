const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3001;

// Parse application/json requests
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded requests
app.use(bodyParser.urlencoded({ extended: true }));


// Route to handle incoming notifications and validation requests
app.post('/', (req, res) => {
  // Extract validationToken from query parameters
  console.log(req.body)
  const resourceDataString = req.body.value[0].resourceData;
    console.log('Received body:', req.body);
    console.log();
   console.log('Stringified Object:', JSON.stringify(resourceDataString, null, 2));
  const validationToken = req.query.validationToken;
  if (validationToken) {
    // Respond with validation token as plain text
    res.set('Content-Type', 'text/plain');
    res.send(validationToken);
} else {
    // Handle other notifications or events as needed
    res.set('Content-Type', 'text/plain');
    res.send('Notification received');
}
});

// GET request example
app.get('/api/get', (req, res) => {
  res.json({ message: 'GET request received' });
});

// POST request example
app.post('/api/post', (req, res) => {
  const data = req.body; // Get JSON data from the POST request body

  // Process the data as needed
  console.log('Received data:', data);

  res.status(200).json({ message: 'POST request received', data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
