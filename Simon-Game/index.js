var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedColor = [];
var started = false;
var level = 0;

$(document).keydown(function () {
    if (!started) {
        $(".heading").text("level " + level);
        nextSequence();
        started = true;
    }
});

//we can use the keyword this
// to refer to the button object that triggered the click.
$(".btn").click(function () {
    //to get the class name of the button clicked
    var userChosenColor = $(this).attr("id");
    userClickedColor.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);

});


//function to check if the sequence pressed by user matches the actual game sequence 
function checkAnswer(currentLevel) {
    //if the user sequence and the game sequence matches
    //then call the nextSequence() method to start off with the new level 
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    //otherwise play the wrong answer sound
    //and change the body color
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $(".heading").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}


//function to generate the next color and to add it to the generated color sequence 
function nextSequence() {
    userClickedPattern = [];

    //increment level
    level++;
    $(".heading").text("Level " + level);

    var randomNum = Math.floor(Math.random() * 4); //   0-3
    var randomColor = buttonColor[randomNum];
    gamePattern.push(randomColor);

    //adding flash animation
    //and sound
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);
}


//function to play sound of the pressed button
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


//function to add animation to the pressed button
function animatePress(currentColor) {
    $("#" + currentColor).addClass(".pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass(".pressed");
    }, 100);
}


//function to restart the game
function startOver() {
    //reset level back to 0
    level = 0;
    gamePattern = [];
    started = false;
}