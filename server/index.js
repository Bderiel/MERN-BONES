const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const User = require('./models/user');

const PORT = process.env.PORT || 3000;
const app = express();

// used to serialize the user for the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({
  secret: process.env.SESSION_SECRET || 'Trabajo',
  resave: false,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(cookieParser()); // read cookies (needed for auth)


/* *    API and auth routes   * */
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));


/* *   Sends index.html  * */
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

/* *   Error handling endware    * */
app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});


mongoose.connect('mongodb://localhost/mydatabase', (err) => {
  if (err) {
    console.log('Unable to connect to Mongo.');
  } else {
    app.listen(PORT, () => {
      console.log('Listening on port 3000...');
    });
  }
});

