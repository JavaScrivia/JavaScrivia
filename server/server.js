const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send('YOU MADE IT TO THE BACKEND');
});

app.listen(PORT, (req, res) => {
  console.log("Yay, express server is running on PORT 3000")
})