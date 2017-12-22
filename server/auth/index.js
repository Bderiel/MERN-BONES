const router = require('express').Router();
const User = require('../models/user');

router.post('/signup', (req, res, next) => {
  const newUser = new User({ email: req.body.email });
  newUser.password = newUser.generateHash(req.body.password);
  newUser.save()
    .then((createdUser) => {
      req.login(createdUser, err => (err ? next(err) : res.json(createdUser)));
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'ValidationError') res.status(401).send('User already exists');
      else {
        next(err);
      }
    });
});

router.post('/login', (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        res.status(401).send('User not found');
      } else if (!user.validPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


router.get('/me', (req, res) => {
  res.json(req.user);
});

module.exports = router;

