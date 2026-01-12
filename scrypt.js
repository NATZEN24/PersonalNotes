function getNotes(){
    return JSON.parse(localStorage.getItem("notes"))|| []; 
}

function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes));
}

const input = document.getElementById("noteInput");
const button = document.getElementById("addNoteBtn");
const noteDiv = document.getElementById("noteList");

//Render notes (READ)
function renderNotes(){
    noteDiv.innerHTML = "";

    const notes = getNotes();

    notes.forEach((text, index)=>{
        const note  =document.createElement("div");
        note.textContent = text;

       const deleteBtn = document.createElement("button");
       deleteBtn.textContent = "Delete";

       deleteBtn.addEventListener("click", function(){
        deleteNote(index);
       });

       note.appendChild(deleteBtn);
       noteDiv.appendChild(note);
    });
}

//Add note (CREATE)
button.addEventListener("click", function() {
    if (input.value === ""){
        return;
    }
    const notes = getNotes();
    notes.push(input.value);
    saveNotes(notes);

    input.value = "";
    renderNotes();
});

//Delete note (DELETE)
function deleteNote(index){
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    renderNotes();
};

//Load notes  when page opens
renderNotes();
