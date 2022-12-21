// Importing the classes  
const stylish = document.querySelector(".stylish"),
searchInput = stylish.querySelector("input"),
volume = stylish.querySelector(".word i"),
infoText = stylish.querySelector(".info-text"),
removeIcon = stylish.querySelector(".search span");



// Declaring the function for search 
function data(result, word){
    if(result.title){
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Check it's spelling or try another word !`;
    }else{
        stylish.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;
        document.querySelector(".word p").innerText = result[0].word;
        document.querySelector(".word span").innerText = phontetics;
        document.querySelector(".meaning span").innerText = definitions.definition;      

    }
}

// function for fetching the word using Dictionary APT
function search(word){
    fetchApi(word);
    searchInput.value = word;
}

// Importing API 
function fetchApi(word){
    stylish.classList.remove("active");
    infoText.style.color = "#000";
    infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;     // Dictionary API 
    fetch(url).then(response => response.json()).then(result => data(result, word)).catch(() =>{
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search for another word.`;
    });
}

// Storing the word fetched by fetchAPI 
searchInput.addEventListener("keyup", e =>{
    let word = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && word){
        fetchApi(word);
    }
});

//To be Displayed in Search box 
removeIcon.addEventListener("click", ()=>{
    searchInput.value = "";
    searchInput.focus();
    stylish.classList.remove("active");
    infoText.style.color = "#9A9A9A";
    infoText.innerHTML = "Type any word and press enter to get it's meaning";
});