const needle = require("needle");

const fetchMyIP = (callback) => {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
    if (error) {
      // request error
      callback(error, null);
      return;
    }
    // check for non 200 status code outside the error check
    if (response.statusCode !== 200) {
      //storing status code error into a variable msg
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${response.body}`;
      // pass an error with the status code
      callback(Error(msg), null);
      return;
    }
    // If no errors, pass back the IP
    callback(null, response.body.ip);
  });
};

const fetchCoordsByIP = (ip, callback) => {

};

module.exports = { fetchMyIP, fetchCoordsByIP };