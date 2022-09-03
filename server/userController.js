const { ModuleFilenameHelpers } = require('webpack');
const db = require('./userModels');

const userController = {};

userController.createUser = (req, res, next) => {
    //post request req.body.
    // console.log('inside create user: ', req.body);
  const values = [req.body.username, req.body.password];
 // const property = ['username', 'password'];
    const query = 'INSERT INTO user_data (username, password) VALUES ($1, $2);'; 
        db.query(query, values)
        .then(response=> {
            console.log('inside db query create user: ', response);
            res.locals.user = response;
            return next();
        })
        .catch(err => {
        return next({
            log: 'Express error handler caught unknown middleware error',
            status: 400,
            message: { err : 'error in create user middleware' },
        });
        });
    };

userController.checkLog = (req, res, next) => {
    //req.query.username and req.query.password
  const values = [req.query.username, req.query.password];
  console.log('Making sure this is username / password', values)
  const query = `SELECT "username", "password" FROM user_data;`;
  db.query(query)
    .then((data) => {
      console.log('username and password exists in DB', data);
      
      return next();
    })

};

userController.updateScore = (req, res, next) => {

};

module.exports = userController;