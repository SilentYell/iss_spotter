const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  times.forEach(pass => {
    const riseTime = new Date(pass.risetime * 1000).toString();
    console.log(`Next pass at ${riseTime} for ${pass.duration} seconds!`);
  });
});