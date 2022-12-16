// get id of the input having id password
var password=document.getElementById("password");
// function to create password which is set to default length of 13 characters
function genPassword() {
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";
// generating pasword
for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
}
// show password in the input box
    document.getElementById("password").value = password;

}
//to copy password 
function copyPassword() {
var copyText = document.getElementById("password");
copyText.select();
copyText.setSelectionRange(0, 999);
document.execCommand("copy");
}
