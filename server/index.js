const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

/* *    API and auth routes   * */
app.use('/auth', require('./auth'));
app.use('/api', require('./api'));

/* *   Sends index.html  * */
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
    .catch(next);
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
    app.listen(3000, () => {
      console.log('Listening on port 3000...');
    });
  }
});

