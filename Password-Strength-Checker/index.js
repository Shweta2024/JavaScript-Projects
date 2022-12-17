var text = document.getElementById('text')
var num = '0123456789'
var loweralpha = 'abcdefghijklmnopqrstuvwxyz'
var upperalpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var special = '!@#$%^&*()_<>?:"{}'
var length = 10;
a = b = c = d = e = false
function checker() {
    console.log(text.value);
    var words = text.value.split("");
    console.log(words);
    if (words.includes('0') || words.includes('1') || words.includes('2') || words.includes('3') || words.includes('4') || words.includes('5') || words.includes('6') || words.includes('7') || words.includes('8') || words.includes('9')) {
        a = true;
        document.getElementById("number").innerHTML = "&#10003 Atleast one digit"
    }
    if (words.includes('a') || words.includes('b') || words.includes('c') || words.includes('d') || words.includes('e') || words.includes('f') || words.includes('g') || words.includes('h') || words.includes('i') || words.includes('j') || words.includes('k') || words.includes('l') || words.includes('m') || words.includes('n') || words.includes('o') || words.includes('p') || words.includes('q') || words.includes('r') || words.includes('s') || words.includes('t') || words.includes('u') || words.includes('v') || words.includes('w') || words.includes('x') || words.includes('y') || words.includes('z')) {
        b = true;
        document.getElementById("small").innerHTML = "&#10003 Atleast one small case alphabet"
    }
    if (words.includes('A') || words.includes('B') || words.includes('C') || words.includes('D') || words.includes('E') || words.includes('F') || words.includes('G') || words.includes('H') || words.includes('I') || words.includes('J') || words.includes('K') || words.includes('L') || words.includes('M') || words.includes('N') || words.includes('O') || words.includes('P') || words.includes('Q') || words.includes('R') || words.includes('S') || words.includes('T') || words.includes('U') || words.includes('V') || words.includes('W') || words.includes('X') || words.includes('Y') || words.includes('Z')) {
        c = true;
        document.getElementById("big").innerHTML = "&#10003 Atleast one upper case alphabet"
    }
    if (words.includes('!') || words.includes('@') || words.includes('#') || words.includes('$') || words.includes('%') || words.includes('^') || words.includes('&') || words.includes('*') || words.includes('(') || words.includes(')') || words.includes('_') || words.includes('{') || words.includes('}') || words.includes(':') || words.includes('"') || words.includes('<') || words.includes('>') || words.includes('?')) {
        d = true;
        document.getElementById("special").innerHTML = "&#10003 Atleast one special character"
    }
    if (text.value.length >= 8) {
        e = true;
        document.getElementById("length").innerHTML = "&#10003 Atleast 8 characters length"
    }
    else {
        console.log("No")
    }
    if (a & b & c & d & e) {
        document.getElementById("res").innerHTML = "The password is secure"
    }
    else {
        document.getElementById("res").innerHTML = "The password is not secure click 'Generate' button to get some suggestions."
    }
}

function generate() {
    var finalpass = password1 = password2 = password3 = password4 = ""
    for (var i = 1; i <= 3; i++) {
        var randomNumber1 = Math.floor(Math.random() * num.length);
        password1 += num.substring(randomNumber1, randomNumber1 + 1);
    }
    for (var i = 1; i <= 3; i++) {
        var randomNumber2 = Math.floor(Math.random() * loweralpha.length);
        password2 += loweralpha.substring(randomNumber2, randomNumber2 + 1);
    }
    for (var i = 1; i <= 2; i++) {
        var randomNumber3 = Math.floor(Math.random() * upperalpha.length);
        password3 += upperalpha.substring(randomNumber3, randomNumber3 + 1);
    }
    for (var i = 1; i <= 2; i++) {
        var randomNumber4 = Math.floor(Math.random() * special.length);
        password4 += special.substring(randomNumber4, randomNumber4 + 1);
    }
    finalpass = password1 + password2 + password3 + password4;
    console.log(finalpass);

    const shuffle = str => [...str].sort(() => Math.random() - .5).join('');
    document.getElementById("text").value = shuffle(finalpass);
}