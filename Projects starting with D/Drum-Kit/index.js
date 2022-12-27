var len = document.querySelectorAll(".btn").length;//it gives the total number of element that has the class name as drum

// Detect Button pressed
/*
1. we are adding EventListener to all the buttons
2. when a button will be called then it will trigger the anonymous function
3. and then the control will go to the playSound function and it will be called with parameter as the innerHTML of the pressed button*/
for (var current = 0; current < len; current++)
    document.querySelectorAll(".btn")[current].addEventListener("click", function () {
        playSound(this.innerHTML)//we are calling the function playSound with the inner html of the button that was pressed
        addAnimation(this.innerHTML);
    });


// Detect Key Pressed
/*
1. we are adding event listener to all the keys of the keyboard,its because the user can press any key
2. when a key will be pressed then the anonymous function gets triggered
3. after that the control goes to the playSound function and it takes tha parameter as the event (event->it has details of the key pressed like key etc.)
*/
document.addEventListener("keyup", function (event) {
    playSound(event.key);
    addAnimation(event.key);
});



function playSound(currentKey) {//current -> a,s,d,f,j,k,l
    switch (currentKey) {
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
    }
}

function addAnimation(currentKey) {
    var currentClass = "." + currentKey;
    var currentDrum = document.querySelector(currentClass);

    currentDrum.classList.add("pressed");

    setTimeout(function () {
        currentDrum.classList.remove("pressed");
    }, 100);

}