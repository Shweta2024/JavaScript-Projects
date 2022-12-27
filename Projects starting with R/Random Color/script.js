const gcolor = () => {
  const randomNumber=Math.floor(Math.random()*16777215); //generates a random number
  const code="#"+ randomNumber.toString(16);//converting into hexvalue
  document.body.style.backgroundColor=code;//applied on the background
  document.getElementById("cc").innerText=code  ;//hexcode will be visible along with the color
  navigator.clipboard.writeText(code);//The hex code gets copied on the clipborad
}
document.getElementById("bt").addEventListener(
  "click",//whenever we click on copy button a random color will be generated
  gcolor
)
gcolor();//the moment code opens at that time also a color will be displayed