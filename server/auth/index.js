const router = require('express').Router();
const User = require('../models/user');

// router.get('/', (req, res, next) => {
//   User.find
// });

router.post('/signup', (req, res, next) => {
  const newUser = new User({ email: req.body.email });
  newUser.password = newUser.generateHash(req.body.password);
  newUser.save()
    .then(saved => res.json(saved));
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
