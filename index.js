const express = require('express');
const app = express();
const { port } = require('./config/environment');
const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');
const bodyParser = require('body-parser');
const morgan = require('morgan');


// app.use(express.static(`${__dirname}/public`));
// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));
app.listen(port, () => console.log(`Express is running on port ${port}`));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', router);

module.exports = app;
