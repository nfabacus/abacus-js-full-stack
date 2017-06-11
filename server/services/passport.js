const passport = require('passport');
const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local Strategy
const localOptions = { usernameField: 'username' }; //Tell local strategy to use username for login (You can tell 'email' here instead of username if preferred.).
const localLogin = new LocalStrategy(localOptions, function(username, password, done) { // or you can pass email instead of username if you are using email for login instead.

  // do validation here:
  // if fails, return done({error:"failed Validation"}, false)
  // if success, just carry on.

  // Verify this username and password, call done with the user
  // if it is the correct username and password
  // Otherwise, call done with false
  User.findOne({ username: username }, function(err, user) {
    if(err) { return done(err); }
    if(!user) { return done(null, false); }

    // compare passwords - is the password equal to user.password?
    user.comparePassword(password, function(err, isMatch) {
      if(err) { return done(err); }
      if(!isMatch) { return done(null, false); }

      return done(null, user); //done callback is provided by passport. It makes user available as req.user.
    });
  });

});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};
// Create JWT Strategy
 // payload is the decoded JWT token.
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that user
  // otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// TEll passport to use these strategies.
passport.use(jwtLogin);
passport.use(localLogin);
