ludogame = () => {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const play1dice = `../img/dice ${play1}.svg`;
    document.getElementById('check1').setAttribute('src', play1dice);

    const play2 = Math.floor(Math.random() * 6) + 1;
    const play2dice = `../img/dice ${play2}.svg`;
    document.getElementById('check2').setAttribute('src', play2dice);

    if (play1 > play2) {
        document.querySelector('h1').innerHTML = "Player 1 won :)";
    } else if (play1 < play2) {
        document.querySelector('h1').innerHTML = "Player 2 won :)";
    } else { document.querySelector('h1').innerHTML = "DRAW "; }
}