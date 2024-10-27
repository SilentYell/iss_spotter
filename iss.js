const needle = require("needle");

const fetchMyIP = (callback) => {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      if (response.statusCode === 200) {
        callback(null, response.body.ip);
      } else {
        callback(Error(`Status Code ${response.statusCode} when fetching IP`), null);
      }
    }
  });
};


module.exports = { fetchMyIP };