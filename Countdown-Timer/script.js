var timer;
function settimer() {
    clearInterval(timer);

    var timer_month = document.getElementById("month").value;
    var timer_day = document.getElementById("day").value;
    var timer_year = document.getElementById("year").value;
    var timer_hour = document.getElementById("hour").value;
    if (timer_hour == "") timer_hour = 0;
    var timer_min = document.getElementById("min").value;
    if (timer_min == "") timer_min = 0;
    // taking input from the input form
    // note that if hours and minutes are not specified then it is set to 00:00 automatically

    var timer_date = timer_month + "/" + timer_day + "/" + timer_year + " " + timer_hour + ":" + timer_min;
    var end = new Date(timer_date); // arranging values in date time format
    var second = 1000; // milliseconds in one second
    var minute = second * 60; // seconds in one minute
    var hour = minute * 60; // minutes in one hour
    var day = hour * 24; // hours in one day

    function showtimer() {
        var now = new Date();
        var remaining = end - now; // difference between current and entered date time
        if (remaining < 0) {
            clearInterval(timer);
            document.getElementById("timer_value").innerHTML = 'Time Up!';
            return;
        }
        // if time remaining is <= 0 display Time Up! else display time remaining time in that format
        var days = Math.floor(remaining / day); // get remaining days
        var hours = Math.floor((remaining % day) / hour); // get remaining hours
        var minutes = Math.floor((remaining % hour) / minute); // get remaining minutes
        var seconds = Math.floor((remaining % minute) / second); // get remaining seconds

        document.getElementById("timer_value").innerHTML = days + 'Days ';
        document.getElementById("timer_value").innerHTML += hours + 'Hrs ';
        document.getElementById("timer_value").innerHTML += minutes + 'Mins ';
        document.getElementById("timer_value").innerHTML += seconds + 'Secs left!';
        // printing time remaining
    }
    timer = setInterval(showtimer, 1000); // update timer every second
}