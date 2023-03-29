const chooseBtn = document.querySelector('.chooseBtn')
const fileInput = document.querySelector('.resizer__file')
const widthInput = document.querySelector('.resizer__input--width')
const heightInput = document.querySelector('.resizer__input--height')
const aspectRadio = document.querySelector('.resizer__aspect')
const canvas = document.querySelector('canvas')
const canvasCtx = canvas.getContext('2d')
let activeImg, originalWid2HeighRatio;


chooseBtn.addEventListener('click',function(){
    fileInput.click()
})


fileInput.addEventListener('change',function(e){
    const reader = new FileReader();
    reader.addEventListener("load", function(){
        openImg(reader.result) 
     }, false);
     reader.readAsDataURL(e.target.files[0]);
})
  
function openImg(img){
    activeImg = new Image();
    activeImg.addEventListener("load", function(){
        originalWid2HeighRatio = activeImg.width  / activeImg.height
        resizeTo(activeImg.width, activeImg.height)   
    });
    activeImg.src = img 
}


widthInput.addEventListener('change',function(){ 
    if(!activeImg) return;
    heightVal = aspectRadio.checked ? (widthInput.value / originalWid2HeighRatio) : heightVal
    resizeTo(widthInput.value, heightVal)   
    alert("Resize Done, Copy and Paste the Image")
})

heightInput.addEventListener('change',function(){ 
    if(!activeImg) return;
    widthVal = aspectRadio.checked ? (originalWid2HeighRatio * heightInput.value) : heightInput.value
    resizeTo(widthVal, heightInput.value)   
    alert("Resize Done, Copy and Paste the Image")
})




function resizeTo(w,h){
    canvas.width = Math.floor(w);
    canvas.height = Math.floor(h);
    widthInput.value  = Math.floor(w);
    heightInput.value  = Math.floor(h);
  
    canvasCtx.drawImage(activeImg,0,0,Math.floor(w),Math.floor(h))
}