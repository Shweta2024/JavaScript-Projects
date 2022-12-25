var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var msg4 = document.getElementById("mess_level");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
  var level_guess = document.getElementById("lvl_guess").value;
  var user_guess = document.getElementById("guess").value;
  if (level_guess < 1 || level_guess > 10) {
    alert("Please enter a level between 1 to 10");
  } else {
    if (user_guess < 1 || user_guess > 100) {
      alert("Please Enter a number Between 1 to 100");
    } else {
      guesses_num.push(user_guess);
      no_of_guesses += 1;
      if (no_of_guesses == level_guess) {
        msg1.textContent = "You Lost The Game!!";
        msg2.textContent =
          "the Number was " + answer + " You were out of guesses ";
      } else {
        if (user_guess < answer) {
          msg1.textContent = "Your Guess is Too low";
          msg2.textContent = "No. Of Guesses : " + no_of_guesses;
          msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess > answer) {
          msg1.textContent = "Your Guess is Too High";
          msg2.textContent = "No. Of Guesses : " + no_of_guesses;
          msg3.textContent = "Guessed Number Are: " + guesses_num;
        } else if (user_guess == answer) {
          msg1.textContent = "Yahhhh You won It!!";
          msg2.textContent =
            "the Number was " +
            answer +
            " You guessd it in " +
            no_of_guesses +
            " Guesses";
        }
      }
    }
  }
}
