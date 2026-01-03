function getNotes(){
    return JSON.parse(localStorage.getItem("notes"))|| []; 
}

function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

const input = document.getElementById("noteInput");
const button = document.getElementById("addNoteBtn");
const noteDiv = document.getElementById("noteList");

button.addEventListener("click", function() {
    if (input.value === ""){
        return;
    }
    const note = document.createElement("div");
    note.textContent = input.value;
    noteDiv.appendChild(note);
    input.value = "";
    
});
