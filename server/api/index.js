const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.send('test api route');
});

module.exports = router;
