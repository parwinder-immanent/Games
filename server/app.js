const express = require('express')
const app = express()
const port = 5000
const jwt = require('jsonwebtoken');

//  just check




// Authenticate page 
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the our authenticate  section  '
  }
  );
});

app.post('/api/user/register', (req,res)=>{
  // 1. extract payload from request body
  // 2. if the payload contians valid user data, add a new user to the database
  // 3. login the newly registered user by returning a jwt
  res.json({

  })
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
  const user = {
    id: 1,
    username: 'brad',
    email: 'brad@gmail.com'
  }
  // 1. extract payload from request body
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



// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader);
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }

}
app.listen(5000, () => console.log('Server started on port 5000'));





