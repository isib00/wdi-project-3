const express = require('express');
const app = express();

const { port } = require('./config/environment');
const env = require('./config/environment');

app.use(express.static(`${__dirname}/public`));

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Express is running on port ${port}`));

const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');

const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

app.use(function(error, req, res, next) {
  console.log('There was an error', error);
  if (error.name === 'ValidationError') {
    res.status(422).json(error.errors);
  } else if (error) {
    res.status(500).send(error._message);
  } else {
    next();
  }
});

app.listen(env.port, () => console.log(`Up and running on ${env.port}`));

module.exports = app;
