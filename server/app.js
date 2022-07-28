const express = require('express')
const { UserDB } = require('./Users')
const { verifyToken } = require("./services/jwt")
const app = express()
const port = 5000
const jwt = require('jsonwebtoken');
const bodyParser = require ('body-parser');
app.use(bodyParser.json());

//  just check




// Authenticate page 
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the our authenticate  section  now '
  }
  );
});

app.post('/api/user/register', (req,res)=>{
  // 1. extract payload from request body
  const user = req.body;
  console.log(user)
  // 2. if the payload contians valid user data and
  // 2.1 check if the user with the given email already exists in our database
  // 2.2 add a new user to the database
  UserDB.addUser(user)
  console.log(UserDB.users)

  // 3. login the newly registered user by returning a jwt.
  res.json(UserDB.users.length)
})



app.post('/api/user/authenticate', verifyToken, (req, res) => {

  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'User Successfully Authenticated',
        authData
      });
    }
  });
});

app.post('/api/user/login', (req, res) => {
  // Mock user
  // 1. extract payload from request body
  console.log(req.body)
  // 2. check that request payload contains valid user data
  
  // 3. verify that the user exists in our database
  // 4. match password
  // 5. login if passwords match
  // 6. else reject login request
  jwt.sign({ user }, 'secretkey', { expiresIn: '500s' }, (err, token) => {
    res.json({
      token
    });
  });
});



app.listen(5000, () => console.log('Server started on port 5000'));





