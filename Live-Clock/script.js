// set the time of the clock so that it shows the right timing

const secondHand = document.querySelector('.second-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();             

    const seconds = now.getSeconds();                 
    const secondsDegrees = ((seconds / 60) * 360) + 90;                 // set the second hand time
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;      // set the minute hand time
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;         // set the hour hand time
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);                      

  setDate();                     // here setData() function call for live data
