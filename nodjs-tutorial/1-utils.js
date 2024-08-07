
const sayHi = (name) => {
    console.log("Hello there " + name);
}

module.exports = sayHi


// funcion to calculate time
module.exports.timMinutes = (secs) => {
  // Algorithm
  /* 60sec -> 1min
     secs -> xmin

     to find x
     x = secs * 1min / 60secs
   */

    const minutes = secs * 1 / 60;
    return Math.floor(minutes);
}


// funcion to calculate time
module.exports.timHours = (min) => {
    // Algorithm
    /* 60min -> 1hour
       min -> xhour
  
       to find x
       x = min * 1hour / 60min
     */
  
    const hours = Math.floor( min * 1 / 60);
    const remainingMin = min % 60;
    return {
        hours,
        remainingMin
    };
  }