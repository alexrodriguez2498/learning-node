const nodeGeoCoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: 'https',
  apikey: 'ts2WderkbbsXOf3vNfhKJwXdE64kzLyI',
  formatter: null
};
console.log(options);
const geocoder = nodeGeoCoder(options);

module.exports = geocoder;
