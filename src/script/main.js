import "./../styles/main.css";

const loadingIndicator = document.createElement('div');
loadingIndicator.id = 'loadingIndicator';
loadingIndicator.style.display = 'none';
loadingIndicator.textContent = 'Loading...';

document.body.appendChild(loadingIndicator);

function showLoadingIndicator() {
  loadingIndicator.style.display = 'block';
}

function hideLoadingIndicator() {
  loadingIndicator.style.display = 'none';
}

let notesData = [];

function fetchNotes() {
  showLoadingIndicator();

  fetch('https://notes-api.dicoding.dev/v2/notes', { method: 'GET' })
    .then(response => {
      hideLoadingIndicator();
      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }
      return response.json();
    })
    .then(data => {
      if (data.status === 'success') {
        notesData = data.data;
        renderNotes();
      } else {
        throw new Error('Failed to fetch notes');
      }
    })
    .catch(error => {
      hideLoadingIndicator();
      console.error('Error fetching notes:', error);
      swal("Oops...", "Failed to fetch notes. Please try again later.", "error");
    });
}

function renderNotes() {
  const noteContainer = document.getElementById("noteContainer");
  noteContainer.innerHTML = '';

  notesData.forEach((note) => {
    const noteElement = document.createElement("note-element");
    noteElement.dataset.id = note.id;
    noteElement.dataset.title = note.title;
    noteElement.dataset.body = note.body;
    noteContainer.appendChild(noteElement);
  });
}

class HeaderApps extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Notes App</h1>
      </header>
    `;
  }
}
customElements.define("header-apps", HeaderApps);

class NoteInput extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="note-input-wrapper">
        <textarea id="noteTitle" name="story" rows="2" cols="33" placeholder="Title"></textarea>
        <textarea id="noteBody" name="story" rows="10" cols="50" placeholder="Note Body"></textarea>
      </div>
      <button class="add-note">Tambah Catatan</button>
    `;
    this.querySelector(".add-note").addEventListener("click", addNote);
  }
}
customElements.define("note-input", NoteInput);

class NoteElement extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (event) => {
      console.log("Element clicked:", this.dataset.id); // Tambahkan console.log untuk memeriksa ID yang diklik
      if (event.target.classList.contains("fa-edit")) {
        const noteId = this.dataset.id.toString();
        editNote(noteId);
      } else if (event.target.classList.contains("fa-trash-alt")) {
        const noteId = this.dataset.id.toString();
        removeNote(noteId);
      }
    });
  }

  connectedCallback() {
    const { id, title, body } = this.dataset;
    this.innerHTML = `
      <div class="note" data-id="${id}">
        <h2>${title}</h2>
        <hr>
        <p>${body}</p>
        <div class="edit-buttons">
          <button class="edit-button"><i class="fas fa-edit"></i></button>
          <button class="remove-button"><i class="fas fa-trash-alt"></i></button>
        </div>
      </div>
    `;
  }
}


customElements.define("note-element", NoteElement);

function saveDataToLocalStorage() {
  localStorage.setItem("notesData", JSON.stringify(notesData));
}

function addNote() {
  const noteTitle = document.getElementById("noteTitle").value;
  const noteBody = document.getElementById("noteBody").value;

  if (noteTitle && noteBody) {
    const requestData = {
      title: noteTitle,
      body: noteBody
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    };

    showLoadingIndicator();

    fetch('https://notes-api.dicoding.dev/v2/notes', requestOptions)
      .then(response => {
        hideLoadingIndicator();
        if (!response.ok) {
          throw new Error('Failed to create note');
        }
        return response.json();
      })
      .then(data => {
        const noteId = data.id;
        const noteElement = document.createElement("note-element");
        noteElement.dataset.id = noteId;
        noteElement.dataset.title = noteTitle;
        noteElement.dataset.body = noteBody;
        document.getElementById("noteContainer").appendChild(noteElement);
        notesData.push({
          id: noteId,
          title: noteTitle,
          body: noteBody,
        });
        saveDataToLocalStorage();
        document.getElementById("noteTitle").value = "";
        document.getElementById("noteBody").value = "";

        swal("Success", "Note created successfully.", "success");
      })
      .catch(error => {
        hideLoadingIndicator(); 
        swal("Oops...", error.message || "Failed to create note. Please try again later.", "error");
      });
  } else {
    swal("Oops...", "Please enter both title and body for the note.", "error");
  }
}

function editNote(id) {
  const noteIndex = notesData.findIndex((note) => note.id === id);
  if (noteIndex !== -1) {
    const noteTitle = notesData[noteIndex].title;
    const noteBody = notesData[noteIndex].body;

    swal({
      title: "Edit Catatan",
      content: {
        element: "div",
        attributes: {
          innerHTML: `
          <div>
            <input id="editedTitle" value="${noteTitle}" placeholder="Masukkan judul" style="margin: 10px;">
          </div>
          <div>
            <textarea id="editedBody" placeholder="Masukkan isi catatan" style="height: 150px;">${noteBody}</textarea>
          </div>
          `
        }
      },
      buttons: {
        confirm: {
          text: "Simpan",
          closeModal: false,
          value: true,
          visible: true,
        },
        cancel: "Batal"
      },
    }).then((willSave) => {
      if (willSave) {
        const editedTitle = document.getElementById("editedTitle").value;
        const editedBody = document.getElementById("editedBody").value;
        if (!editedTitle || !editedBody) {
          swal("Oops...", "Mohon masukkan judul dan isi catatan.", "error");
          return;
        }
        notesData[noteIndex].title = editedTitle;
        notesData[noteIndex].body = editedBody;
        saveDataToLocalStorage();
        renderNotes();
        swal("Berhasil", "Catatan berhasil diperbarui", "success");
      } else {
        swal("Perubahan Dibatalkan");
      }
    });
  } else {
    swal("Oops...", "Catatan tidak ditemukan.", "error");
  }
}


// remove note dengan API
function removeNote(id) {
  const noteElement = document.querySelector(`.note[data-id="${id}"]`);

  swal({
    title: "Apakah Anda yakin?",
    text: "Catatan akan dihapus secara permanen dan tidak dapat dipulihkan.",
    icon: "warning",
    buttons: {
      cancel: "Batal",
      confirm: {
        text: "Hapus",
        value: true,
        visible: true,
      },
    },
    dangerMode: true,
    closeOnClickOutside: false,
  }).then((willDelete) => {
    if (willDelete) {
      fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete note');
          }
          noteElement.remove();
          notesData = notesData.filter((note) => note.id !== id);
          saveDataToLocalStorage();

          swal({
            title: "Berhasil",
            text: "Catatan sudah dihapus",
            icon: "success",
            button: false,
          });
        })
        .catch(error => {
          swal("Oops...", error.message || "Failed to delete note. Please try again later.", "error");
        });
    } else {
      swal("Penghapusan Catatan Dibatalkan");
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchNotes();
});
