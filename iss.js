const needle = require("needle");

const nextISSTimesForMyLocation = function(callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }
    
    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }
      
      fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
        if (error) {
          return callback(error, null);
        }
        
        callback(null, flyoverTimes);
      });
    });
  });
};


//function to get ip address
const fetchMyIP = (callback) => {
  needle.get('https://api.ipify.org?format=json', (error, response) => {
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

//function to get coordinates for the ip address
const fetchCoordsByIP = (ip, callback) => {
  needle.get(`https://ipwho.is/${ip}`, (error, response) => {
    const data = response.body;
    //check if response was successful
    if (!data.success) {
      const msg = `Success status was ${data.success}. Server message says: ${data.message} when fetching for IP ${data.ip}`;
      callback(Error(msg), null);
      return;
    }

    //get latitude and longitude
    const latitude = data.latitude;
    const longitude = data.longitude;
    callback(null, {latitude, longitude});
  });
};

const fetchISSFlyOverTimes = (coords, callback) => {
  needle.get(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response) => {

    //check if response status is not 200. if not 200 then error message.
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching ISS flyover times. Response: ${response.body}`;
      callback(Error(msg), null);
      return;
    }
    //flyover times
    const flyoverTimes = response.body.response;
    callback(null, flyoverTimes);
  });
};

//exporting both functions to be used by index
module.exports = { nextISSTimesForMyLocation };