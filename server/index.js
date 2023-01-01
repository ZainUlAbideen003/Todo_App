// import express (after npm install express)
const { json } = require('express');
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


// create new express app and save it as "app"
const app = express();



app.use(cors());
app.use(express.json());


// server configuration
const PORT = 8080;

// jsonFile = fs.readFileSync(path.join(__dirname,"./data.json"), 'utf-8');

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/welcome', (req, res) => {
    jsonFile = fs.readFileSync(path.join(__dirname,"./data.json"), 'utf-8');
    res.json(JSON.parse(jsonFile));
    // res.sendFile(__dirname,"./data.json");
  });

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
