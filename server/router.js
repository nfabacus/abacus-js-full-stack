const Authentication = require('./controllers/authentication');
const Permission = require('./controllers/permission');

const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // app.get('/', function(req, res, next){
  //   res.send(['hello', 'world', 'friends']);
  // });
  app.get('/', requireAuth, function(req, res){
    res.send({ message: 'Super secret code is abc123.'});
  });

  console.log(requireSignin)
  // {status: false, errorMessage: "Invalid Credentials"}
  app.post('/signin', requireSignin, Authentication.signin);

  app.post('/signup', Authentication.signup);

  app.get('/course', Permission.confirmStudent, function(req, res){
    res.send({ message: 'You are a student!'});
  });
  // app.get('/course', Permission.confirmStudent, Permission.confirmParent, ClassController.getClass)

}
