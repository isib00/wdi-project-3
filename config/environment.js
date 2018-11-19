const port = process.env.PORT || 4000;
const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/item';
const secret = process.env.SECRET || 'jafais';

module.exports = { port, dbUri, secret };
