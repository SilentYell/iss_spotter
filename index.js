const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(times);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
  
//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       console.log("It didn't work!" , error);
//       return;
//     }
//     console.log('Successfully collected coordinates', coords);
    
//     fetchISSFlyOverTimes(coords, (error, flyoverTimes) => {
//       if (error) {
//         console.log("Error finding times", error);
//         return;
//       }
//       console.log(`Rise times found: `, flyoverTimes);
//     });
//   });
// });