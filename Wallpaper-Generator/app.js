
let url=`https://api.unsplash.com/photos/random/?client_id=${clientid}`
let image=document.getElementById("image");
let generate=document.getElementById("generate");
generate.addEventListener("click",()=>{
    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        display(data)
    }).catch(function(error){
    console.log("Error :"+error)
    })
    
})

function display(data) {
        document.getElementById("image").src=data.urls.regular
    }