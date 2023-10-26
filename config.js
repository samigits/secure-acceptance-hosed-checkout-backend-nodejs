const dotenv = require('dotenv');

dotenv.load();

exports.CORS_ALLOWED_HOSTS = [
  '127.0.0.1',
  '0.0.0.0',
  'localhost',
  'http://localhost:3001',
];
exports.cybersource = {
  ACCESS_KEY: '<-- YOUR ACCESS KEY -->',
  ORG_ID: '<-- YOUR MERCHANT ID -->>', // you can ignore the merchant id
  PROFILE_ID: '<-- YOUR PROFILE ID -->',
  SECRET_KEY: '<-- YOUR SECRET KEY -->',
};
