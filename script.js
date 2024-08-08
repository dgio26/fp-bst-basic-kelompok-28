document.getElementById('create-note').addEventListener('click', createNote);

function createNote() {
    const notesContainer = document.getElementById('notes-container');

    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="note-header">
            <button onclick="showNoteBody(this)"><i class="fas fa-eye"></i></button>
            <button onclick="saveNoteBody(this)"><i class="fas fa-save"></i></button>
            <button onclick="deleteNoteBody(this)"><i class="fas fa-trash"></i></button>
        </div>
        <div class="note-body" contenteditable="true"></div>
    `;

    notesContainer.appendChild(note);
}

function showNoteBody(button) {
    const noteBody = button.parentElement.nextElementSibling;
    noteBody.style.display = noteBody.style.display === 'block' ? 'none' : 'block';
}

function saveNoteBody(button) {
    const noteBody = button.parentElement.nextElementSibling;
    const noteContent = noteBody.innerText;
    alert('Note saved: ' + noteContent);
}

function deleteNoteBody(button) {
    const note = button.closest('.note');
    note.remove();
}
