const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, student: user.student, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their username and password auth'd
  // We just need to give them a token.
  res.send({ token: tokenForUser(req.user)});

}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const studentStatus = true;

  // input checks, better checks required.
  if(!email || !username || !password) {
    return res.status(422).send({ error: 'Please provide email, username and password.' });
  }

  // See if a user with the given username exists
  User.findOne({ username: username }, function(err, existingUser){
    if(err) { return next(err); }

    // If a user with username exist, return an error.
    if(existingUser) {
      return res.status(422).send({ error: 'This username is already taken. Please choose a different username.'});
    }

    // If a user with username does NOT exist, create and save user record
    const user = new User({
      email: email,
      username: username,
      password: password,
      student: studentStatus
    });

    user.save(function(err){
      if (err) { return next(err); }
    });

    // Respond to request indicating the user was created
    res.json({ token: tokenForUser(user) });
  });







}
