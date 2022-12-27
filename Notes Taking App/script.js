


const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");


// When user clicks on add button it creates a Note 
addBtn.addEventListener(
    "click",
function() {
    addNote()
}
)


// Function to save Notes written by user 
const saveNotes = () =>{
    const notes =document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value)
        }
    )

    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
    localStorage.setItem("notes",JSON.stringify(data));

    }

}



// Logic to add Multiple NOtes by using JS
const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML= `
    <div class="tool">
    <i class="save fa fa-floppy-disk"></i>
    <i class="trash fa fa-trash"></i>
 
    </div>
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener(
        "click",
        function() {
            note.remove()
            saveNotes()
        }
    )

    note.querySelector(".save").addEventListener(
        "click",
        function() {
            saveNotes()
        }
    )



    

    main.appendChild(note);
    saveNotes()
}

(

    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if(lsNotes === null){
            addNote();
        }
        else{
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote)
                }
            )
        }
        
    }()
)