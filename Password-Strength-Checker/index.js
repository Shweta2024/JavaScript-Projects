var text = document.getElementById('text')
//defining the digits, lower case, upper case, special characters and the length
var num = '0123456789' 
var loweralpha = 'abcdefghijklmnopqrstuvwxyz'
var upperalpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var special = '!@#$%^&*()_<>?:"{}'
var length = 10;
a = b = c = d = e = false
function checker() { //defining the checker function
    // console.log(text.value);
    var words = text.value.split(""); //using split function to access the words of the password
    // console.log(words);
    // Checking if digit is present in the password
    if (words.includes('0') || words.includes('1') || words.includes('2') || words.includes('3') || words.includes('4') || words.includes('5') || words.includes('6') || words.includes('7') || words.includes('8') || words.includes('9')) {
        a = true;
        document.getElementById("number").innerHTML = "&#10003 Atleast one digit"
    }
    // Checking if lower case is present in the password
    if (words.includes('a') || words.includes('b') || words.includes('c') || words.includes('d') || words.includes('e') || words.includes('f') || words.includes('g') || words.includes('h') || words.includes('i') || words.includes('j') || words.includes('k') || words.includes('l') || words.includes('m') || words.includes('n') || words.includes('o') || words.includes('p') || words.includes('q') || words.includes('r') || words.includes('s') || words.includes('t') || words.includes('u') || words.includes('v') || words.includes('w') || words.includes('x') || words.includes('y') || words.includes('z')) {
        b = true;
        document.getElementById("small").innerHTML = "&#10003 Atleast one small case alphabet"
    }
    // Checking if upper case is present in the password
    if (words.includes('A') || words.includes('B') || words.includes('C') || words.includes('D') || words.includes('E') || words.includes('F') || words.includes('G') || words.includes('H') || words.includes('I') || words.includes('J') || words.includes('K') || words.includes('L') || words.includes('M') || words.includes('N') || words.includes('O') || words.includes('P') || words.includes('Q') || words.includes('R') || words.includes('S') || words.includes('T') || words.includes('U') || words.includes('V') || words.includes('W') || words.includes('X') || words.includes('Y') || words.includes('Z')) {
        c = true;
        document.getElementById("big").innerHTML = "&#10003 Atleast one upper case alphabet"
    }
    // Checking if special is present in the password
    if (words.includes('!') || words.includes('@') || words.includes('#') || words.includes('$') || words.includes('%') || words.includes('^') || words.includes('&') || words.includes('*') || words.includes('(') || words.includes(')') || words.includes('_') || words.includes('{') || words.includes('}') || words.includes(':') || words.includes('"') || words.includes('<') || words.includes('>') || words.includes('?')) {
        d = true;
        document.getElementById("special").innerHTML = "&#10003 Atleast one special character"
    }
    // Checking if password length is atleast 8
    if (text.value.length >= 8) {
        e = true;
        document.getElementById("length").innerHTML = "&#10003 Atleast 8 characters length"
    }
    else {
        // console.log("No")
    }
    // If all of the above conditions turn out to be true, then return 'secure password' else the other statement.
    if (a & b & c & d & e) {
        document.getElementById("res").innerHTML = "The password is secure"
    }
    else {
        document.getElementById("res").innerHTML = "The password is not secure click 'Generate' button to get some suggestions."
    }
}

function generate() { //defining the password generating function
    var finalpass = password1 = password2 = password3 = password4 = ""
    for (var i = 1; i <= 3; i++) { //randomly choosing 3 digits from the list of digits defined above
        var randomNumber1 = Math.floor(Math.random() * num.length);
        password1 += num.substring(randomNumber1, randomNumber1 + 1);
    }
    for (var i = 1; i <= 3; i++) { //randomly choosing 3 lower case alphabets from the list of digits defined above
        var randomNumber2 = Math.floor(Math.random() * loweralpha.length);
        password2 += loweralpha.substring(randomNumber2, randomNumber2 + 1);
    }
    for (var i = 1; i <= 2; i++) { //randomly choosing 2 upper case alphabets from the list of digits defined above
        var randomNumber3 = Math.floor(Math.random() * upperalpha.length);
        password3 += upperalpha.substring(randomNumber3, randomNumber3 + 1);
    }
    for (var i = 1; i <= 2; i++) { //randomly choosing 2 special characters from the list of digits defined above
        var randomNumber4 = Math.floor(Math.random() * special.length);
        password4 += special.substring(randomNumber4, randomNumber4 + 1);
    }
    finalpass = password1 + password2 + password3 + password4; //combining the final password in the form ' 123abcAB!@ '
    // console.log(finalpass);

    const shuffle = str => [...str].sort(() => Math.random() - .5).join(''); //shuffling the final password for more security/variations
    document.getElementById("text").value = shuffle(finalpass);
}