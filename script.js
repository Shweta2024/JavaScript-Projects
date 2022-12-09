const gcolor = () => {
  const randomNumber=Math.floor(Math.random()*16777215); 
  const code="#"+ randomNumber.toString(16);
  document.body.style.backgroundColor=code;
  document.getElementById("cc").innerText=code  ;
  navigator.clipboard.writeText(code);
}
document.getElementById("bt").addEventListener(
  "click",
  gcolor
)
gcolor();