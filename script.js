document.getElementById('create-note').addEventListener('click', createNote);
document.getElementById('search-bar').addEventListener('input', searchNotes);

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
        <input class="note-title" placeholder="Note title..." />
        <div class="note-body" contenteditable="true"></div>
    `;

    notesContainer.prepend(note);
}

function showNoteBody(button) {
    const noteBody = button.parentElement.nextElementSibling.nextElementSibling;
    noteBody.style.display = noteBody.style.display === 'block' ? 'none' : 'block';
}

function saveNoteBody(button) {
    const note = button.closest('.note');
    const noteTitle = note.querySelector('.note-title').value;
    const noteBody = note.querySelector('.note-body').innerText;
    alert('Note saved: ' + noteTitle + '\n' + noteBody);
}

function deleteNoteBody(button) {
    const note = button.closest('.note');
    note.remove();
}

function searchNotes() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const notes = document.querySelectorAll('.note');

    notes.forEach(note => {
        const title = note.querySelector('.note-title').value.toLowerCase();
        if (title.includes(searchTerm)) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
        }
    });
}
