var watch = document.getElementsByClassName("watch")[0];
var start_btn = document.getElementById("start");
var stop_btn = document.getElementById("stop");
var restart_btn = document.getElementById("restart");

let seconds = 0;
let interval = null;

function timer() {
    seconds++;


    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let sec = seconds % 60;

    if(sec < 10)
        sec = '0' + sec;
    
    if(minutes < 10)
        minutes = '0' + minutes;
    
    if(hours < 10)
        hours = '0' + hours;

    watch.innerHTML = `${hours}:${minutes}:${sec}`;
}

function start() { // defining the start function
    if(interval)
    {
        return;
    }

    interval = setInterval(timer, 1000);
}

function stop() { // defining the stop function, using the clearInterval function
    clearInterval(interval);
    interval = null;
}

function restart() { // defining the restart function, set innerHTML to 00:00:00 when clicked
    stop();
    seconds = 0;
    watch.innerHTML = "00:00:00";
}