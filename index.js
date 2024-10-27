const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("Error. Failed to get Coordinates", error);
      return;
    }
    console.log('Successfully collected coordinates', coords);
  });
});