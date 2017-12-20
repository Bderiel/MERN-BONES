const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('auth route');
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
