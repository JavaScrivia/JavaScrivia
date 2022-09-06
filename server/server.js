const path = require('path');
const express = require('express');
const userController = require('./userController');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/api', userController.checkSign, userController.createUser, (req, res) => {
  //post request from signup page
  return res.status(200).send(true); 
});

app.get('/api', userController.checkLog, (req, res) => {
  //get request from login page
  return res.status(200).json(res.locals.exists);
});

app.patch('/api', userController.updateScore, (req, res) => {
  //patch request to update user score
  return res.status(200).send('score updated');
});

app.get('/board', userController.leaderBoard, (req, res) => {
  //for diaplying the entire leaderboard
  return res.status(200).json(res.locals.board);
});

app.get('/user', userController.getScore, (req, res) => {
  console.log('inside app.get for /user: ', res.locals.score)
  return res.status(200).json(res.locals.score);
})

app.get('/', (req, res) => {
  return res.status(200).send('successfully logged in!');
});

//catch all route handler
app.use('*', (req, res) => {
  return res.status(404).send('THIS ENDPOINT DOES NOT EXIST')
});

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