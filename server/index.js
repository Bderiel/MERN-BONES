const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


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


app.listen(3000, () => console.log('We really out here in port 3000!'));
