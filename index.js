const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    console.log('Successfully collected coordinates', coords);
  });
  
  fetchISSFlyOverTimes(coords, (error, times) => {
    if (error) {
      console.log("Error finding times");
      return;
    }
    console.log(`Rise times found: `);
  });
});