const path = require('path');
const express = require('express');
const userController = require('./userController');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api', userController.createUser, (req, res) => {
  //post request from signup page
  return res.status(200).json(res.locals.user); 
});

app.get('/api', (req, res) => {
  //get request from login page
  return res.status(200).send('SUCCESSFULLY LOGGED IN')
});

app.get('/', (req, res) => {
  return res.status(200).send('YOU MADE IT TO THE BACKEND');
});
//catch all route handler
app.use('*', (req, res) => {
  return res.status(404).send('THIS ENDPOINT DOES NOT EXIST')
})

// global error handler:
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred!!!!!!!!!' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, (req, res) => {
  console.log("Yay, express server is running on PORT 3000")
})