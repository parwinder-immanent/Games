const express = require('express')
const { UserDB } = require('./Users')
const { user } = require('./users')
const { verifyToken } = require("./services/jwt")
const { validateUser } = require("./services/validate")
const { body, validationResult } = require('express-validator');
const app = express()
const port = 5000
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/http://localhost:3000/', (req, res) => {
req.body

res.send('')
// Authenticate page 
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the our authenticate  section here '
  }
  );
});

app.post('/api/user/register', [
  body('name').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 8 }).matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
  )
], (req, res) => {
  // 1. extract payload from request body
  const user = req.body;
  console.log("request body", user)
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).send("Invalid User")
  }

  console.log("user is valid")
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password

  // 2.1 check if the user with the given email already exists in our database

  if (UserDB.findUserByEmail(email)) {
    return res.status(400).send("User alredy exist")
  } else {
    res.status(200).send("Registration sucessfull")
  }

  // 2.2 add a new user to the database
  UserDB.addUser(user)
  console.log(UserDB.users)

  // 3. login the newly registered user by returning a jwt.
  res.json(UserDB.users)
})
app.post('',(req,res)=>{ 

  res.json()
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
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

app.post('/api/user/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 8 }).matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
  )
], (req, res) => {
  // Mock user
  // 1. extract payload from request body
  console.log(req.body)
  // 2. check that request payload contains valid user data

  const email = req.body.email
  const password = req.body.password

  // 3. verify that the user existd)  s in our database
  const userMail = UserDB.findUserByEmail(email)
  const userpassword = UserDB.findUserBypassword(password)
  // const user = UserDB.findUserByEmail(email)

  if (typeof userMail === "undefined" || typeof userpassword === "undefined") {
    res.status(200).send("Please enter Your   Rigth Login credential ")
  }
  else {
    return res.status(400).send("Welcome")
  }


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

