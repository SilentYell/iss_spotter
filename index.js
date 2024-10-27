const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  
  // check if times is an array and has elements
  if (Array.isArray(times) && times.length > 0) {
    times.forEach(pass => {
      const date = new Date(pass.risetime * 1000);
      console.log(`Next pass at ${date} for ${pass.duration} seconds!`);
    });

  } else {
    console.log("No passes found.");
  }
});
