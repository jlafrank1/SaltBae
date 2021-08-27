
let tick = 1000 // time interval in miliseconds 1000=1s
let time = 10000 // total time
let countdown = setInterval(function () {
  if (time <= 0) {
      clearInterval(countdown);
      console.log('-----> Time is up ----->') // do this when the timer is done
  } else {
      let timeLeft = time / tick // convert miliseconds to seconds
      console.log(timeLeft); // display remaining time 
  }
  time -= tick; // subject 1 tick per time interval
}, tick);