const express = require('express');
const app = express();
const { port } = require('./config/environment');
const env = require('./config/environment');
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);
const router = require('./config/router');
const bodyParser = require('body-parser');
const morgan = require('morgan');



// app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use('/api', router);
app.listen(port, () => console.log(`Express is running on port ${port}`));
module.exports = app;
