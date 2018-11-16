const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/fish';
const secret = process.env.SECRET || 'getwildwithcoffee';

module.exports = {
  port, dbUri, secret
};
