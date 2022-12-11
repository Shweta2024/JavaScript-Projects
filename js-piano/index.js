const pianokeys = document.querySelectorAll('.key') //selects class having keys
// funtion to play sound
function sound(link){
new Audio(link).play()
console.log(link)
}
//loop through key and if the number is less than 9 will add a '0' before it to get key name from keys folder else get the original number
pianokeys.forEach((key,i)=>{
    const number = i<9?'0'+(i+1):(i+1)
    const link = 'keys/key'+number+'.mp3'
    key.addEventListener('click',()=>sound(link))
})
