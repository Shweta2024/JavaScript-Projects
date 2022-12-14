//Url to use api,client id has been hidden to hide api key
let url=`https://api.unsplash.com/photos/random/?client_id=${clientid}`
//initialising variable with html elements
let image=document.getElementById("image");
let generate=document.getElementById("generate");
//adding on click event listener to "generate" button,fetch api has been used here to get images
generate.addEventListener("click",()=>{
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        display(data)
    }).catch(function(error){
    console.log("Error :"+error)
    })
    
})
//Function to display wallpapers
function display(data) {
        document.getElementById("image").src=data.urls.regular
    }
