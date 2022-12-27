const word = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgain = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');
const head = document.querySelector('.head');
const body = document.querySelector('.body');
const leftArm = document.querySelector('.left-arm');
const rightArm = document.querySelector('.right-arm');
const leftLeg = document.querySelector('.left-leg');
const rightLeg = document.querySelector('.right-leg');
const instruction = document.querySelector('.instruction');
const play = document.querySelector('#play');
const figureParts = [head, body, leftArm, rightArm, leftLeg, rightLeg];

const words = [
    "stash", "minimalists", "telford", "cheddars", "dippable", "dizened", "expurgates", "plasmons", "meanders","brisks", 
    "steamrollering", "eruptively", "clamorers", "comraderies", "monocotyl", "credentials", "claustrophobia", "solecised",
    "viscerally", "repudiated", "jagging", "superber", "pilgrimaged", "recurrences", "septette", "salimeter", "lostnesses", "scrimpiest",
    "yuan", "myxoviral", "psychologists", "indexed", "slammed", "unbans", "concerts", "germane", "grooming", "versus", "whodunit", 
    "gurglets", "bilingualisms","inkblots", "mousier", "inwound", "septenarius", "terminators", "underate", "spillable", "admonitor", "fueled"
]


let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    instruction.style.display = "none";
    word.innerHTML = `
    ${selectedWord.split('').map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : ''}</span>`).join('')}`;

    const innerWord = word.innerText.replace(/[ \n]/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😃';
        finalMessageRevealWord.innerText = '';
        popup.style.display = 'flex';

        playable = false;
    }
}

// Update the wrong letters
function updateWrongLettersEl() {
    // Display wrong letters
    wrongLettersEl.innerHTML = `${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}`;

    // Display parts
    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    // Check if lost
    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Dead Xd. You lost! 😕';
        finalMessageRevealWord.innerText = `Selected  word was: ${selectedWord}`;
        popup.style.display = 'flex';

        playable = false;
    }
}

// Show notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Keydown letter press
window.addEventListener('keydown', e => {
    // console.log(e);
    if (playable) {
        if (e.keyCode >= 65 && e.keyCode <= 90) {
            const letter = e.key.toLowerCase();

            if (selectedWord.includes(letter)) {
                if (!correctLetters.includes(letter)) {
                    correctLetters.push(letter);

                    displayWord();
                } else {
                    showNotification();
                }
            } else {
                if (!wrongLetters.includes(letter)) {
                    wrongLetters.push(letter);

                    updateWrongLettersEl();
                } else {
                    showNotification();
                }
            }
        }
    }
});

// Restart game and play again
playAgain.addEventListener('click', () => {
    playable = true;

    //  Empty arrays
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
});

play.addEventListener('click', () =>{
    displayWord();
})