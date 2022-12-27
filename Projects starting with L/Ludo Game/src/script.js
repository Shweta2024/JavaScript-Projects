// On onclick, call the ludogame function.
ludogame = () => {
    // storing the random math floor value to a variable play1.
    const play1 = Math.floor(Math.random() * 6) + 1;
    // To change the images in run-time.
    const play1dice = `../img/dice ${play1}.svg`;
    document.getElementById('check1').setAttribute('src', play1dice);
    
    // Same as above for player 2.
    const play2 = Math.floor(Math.random() * 6) + 1;
    const play2dice = `../img/dice ${play2}.svg`;
    document.getElementById('check2').setAttribute('src', play2dice);

    // Comparing the value of both the player, if play1 is greater then player1 won
    // else player2 won.
    if (play1 > play2) {
        document.querySelector('h1').innerHTML = "Player 1 won :)";
    } else if (play1 < play2) {
        document.querySelector('h1').innerHTML = "Player 2 won :)";
    } else { document.querySelector('h1').innerHTML = "DRAW "; }
}
