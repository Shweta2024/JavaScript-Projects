//Set interval function to regularly update time
setInterval(() => {
  date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();

  hour_rotation = 30 * hours + minutes / 2;
  minutes_rotation = 6 * minutes;
  seconds_rotation = 6 * seconds;
//Move hands of clock by using rotate function
  document.getElementById(
    "hour"
  ).style.transform = `rotate(${hour_rotation}deg)`;
  document.getElementById(
    "min"
  ).style.transform = `rotate(${minutes_rotation}deg)`;
  document.getElementById(
    "sec"
  ).style.transform = `rotate(${seconds_rotation}deg)`;
}, 1000);

hour = document.getElementById("hour");
minute = document.getElementById("min");
second = document.getElementById("sec");
image_arr = ["./cl1.jpg", "./cl2.jpg", "./cl3.png"];

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let clock = document.getElementById("clock");
let c = 0;
//Adding onclickevent listener to next and previous button
next.addEventListener("click", () => {
  if (c <= 1) c++;
  adjust();
});

previous.addEventListener("click", () => {
  if (c > 0) c--;
  adjust();
});

//Function to change clock 
function adjust() {
  clock.style.backgroundImage = `url(${image_arr[c]})`;
  if (c == 0) {
    hour.style.left = "49.9%";
    second.style.left = "49.9%";
    minute.style.left = "49.9%";

    hour.style.width = "4px";
    minute.style.width = "4px";
    second.style.width = "4px";

    hour.style.height = "6rem";
    minute.style.height = "9.5rem";
    second.style.height = "9.5rem";

    hour.style.top = "36%";
    second.style.top = "28%";
    minute.style.top = "28%";
  } else if (c == 1) {
    hour.style.left = "47.3%";
    second.style.left = "47.3%";
    minute.style.left = "47.3%";
    hour.style.width = "4px";
    minute.style.width = "4px";
    second.style.width = "4px";
    hour.style.height = "6rem";
    minute.style.height = "9.5rem";
    second.style.height = "9.5rem";

    hour.style.top = "36%";
    second.style.top = "28%";
    minute.style.top = "28%";
  } else {
    hour.style.width = "6px";
    minute.style.width = "6px";
    second.style.width = "6px";
    hour.style.height = "6rem";
    minute.style.height = "9.5rem";
    second.style.height = "9.5rem";

    hour.style.left = "49.6%";
    second.style.left = "49.6%";
    minute.style.left = "49.6%";

    hour.style.top = "34%";
    second.style.top = "26%";
    minute.style.top = "26%";
  }
}
//Calling this function to display first clock
adjust();
