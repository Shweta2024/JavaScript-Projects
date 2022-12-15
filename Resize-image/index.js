const displayBox = document.querySelector(".upload-file"),
displayImg = displayBox.querySelector("img"),
fileInput = displayBox.querySelector("input"),
widthIpt = document.querySelector(".width input"),
heightIpt = document.querySelector(".height input"),
ratioIpt = document.querySelector(".ratio input"),
qualityIpt = document.querySelector(".quality input"),
dwnldBtn = document.querySelector(".dwnld-btn");

let ogImgRatio;


heightIpt.addEventListener("keyup", () => {
    // getting width according to ratio checkbox 
    const width = ratioIpt.checked ? heightIpt.value * ogImgRatio : widthIpt.value;
    widthIpt.value = Math.floor(width);
});


widthIpt.addEventListener("keyup", () => {
    // getting height according to ratio checkbox
    const height = ratioIpt.checked ? widthIpt.value / ogImgRatio : heightIpt.value;
    heightIpt.value = Math.floor(height);
});

const displayFile = (e) => {
    const file = e.target.files[0]; // getting first user selected file
    if(!file) return; // return if user didn't select any file
    displayImg.src = URL.createObjectURL(file); // passing selected file url to img src
    displayImg.addEventListener("load", () => { // once img loaded
        widthIpt.value = displayImg.naturalWidth;
        heightIpt.value = displayImg.naturalHeight;
        ogImgRatio = displayImg.naturalWidth / displayImg.naturalHeight;
        document.querySelector(".content").classList.add("display");
    });
}


const resizeCompressAndDownload = () => {
    const canvas = document.createElement("canvas");
    const a = document.createElement("a");
    const context= canvas.getContext("2d");
    //quality value
    const imgQuality = qualityIpt.value;

    // setting canvas height & width according to the input values
    canvas.width = widthIpt.value;
    canvas.height = heightIpt.value;

    // drawing user selected image onto the canvas
    context.drawImage(displayImg, 0, 0, canvas.width, canvas.height);
    
    // passing canvas data url as href value of <a> element
    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    // passing current time as download value
    a.download = new Date().getTime(); 
    // clicking <a> element so the file download
    a.click(); 
}
    

dwnldBtn.addEventListener("click", resizeCompressAndDownload);
fileInput.addEventListener("change", displayFile);
displayBox.addEventListener("click", () => fileInput.click());