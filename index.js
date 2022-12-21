//generating a random number for the 1st dice
//and then accordingly changing the source image of the 1st dice

var randomNum1 = Math.floor(Math.random() * 6) + 1; // 1-6

var currentImage = "images/dice" + randomNum1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelector(".img1").setAttribute("src", currentImage);



//generating a random number for the 2nd dice
//and then accordingly changing the source image of the 2nd dice 

var randomNum2 = Math.floor(Math.random() * 6) + 1; // 1-6

var currentImage2 = "images/dice" + randomNum2 + ".png";    // images/dice1.png - images/dice6.png
document.querySelector(".img2").setAttribute("src", currentImage2);


//if the value in the 1st dice is greater than that of the second dice
//then we'll change the heading to "Player 1 wins"
if (randomNum1 > randomNum2)
    document.querySelector("#heading").innerHTML = "Player 1 wins";

//else if value of 2nd dice is greater than the 1st dice
//then we'll change the heading "Player 2 wins"
else if (randomNum2 > randomNum1)
    document.querySelector("#heading").innerHTML = "Player 2 wins";

//else if the value of both the dice are same
//then we'll change the heading to "Draw"
else
    document.querySelector("#heading").innerHTML = "🎊 Draw 🎊"