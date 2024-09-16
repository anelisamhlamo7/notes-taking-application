// // Initialize Quill Editor
// const quill = new Quill('#editor', {
//     theme: 'snow',
//     modules: {
//       toolbar: [
//         ['bold', 'italic', 'underline'],
//         [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//         [{ 'color': [] }, { 'background': [] }]
//       ]
//     }
//   });
  
  
// // Save note content to localStorage with the title as the identifier
// function saveNote() {
//     const noteContent = quill.root.innerHTML;
//     const noteTitle = prompt("Enter a title for your note:");
  
//     if (noteTitle) {
//       let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  
//       // Check if the title already exists
//       const noteExists = savedNotes.some(note => note.title === noteTitle);
//       if (noteExists) {
//         alert('A note with this title already exists! Please choose a different title.');
//         return;
//       }
  
//       // Save the note with the title as the identifier
//       savedNotes.push({ title: noteTitle, content: noteContent });
//       localStorage.setItem('notes', JSON.stringify(savedNotes));
//       alert('Note saved!');
//       displayNotes();  // Refresh the saved notes list
//     } else {
//       alert('Note title is required!');
//     }
//   }


//   // Display saved notes by their titles in a list
// function displayNotes() {
//     const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     const notesList = document.getElementById('saved-notes-list');
//     notesList.innerHTML = ''; // Clear the current list
  
//     savedNotes.forEach(note => {
//       const noteItem = document.createElement('li');
//       noteItem.textContent = note.title;
//       noteItem.setAttribute('data-title', note.title);
//       noteItem.onclick = () => loadNoteByTitle(note.title); // Load the clicked note
//       notesList.appendChild(noteItem);
//     });
//   }



//   function toggleNotes() {
//     const savedNotesSection = document.getElementById('saved-notes');
//     if (savedNotesSection.style.display === 'none') {
//       savedNotesSection.style.display = 'block';
//     } else {
//       savedNotesSection.style.display = 'none';
//     }
//   }
  
  
// // Load a specific note by its title
// function loadNoteByTitle(noteTitle) {
//     const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     const noteToLoad = savedNotes.find(note => note.title === noteTitle);
    
//     if (noteToLoad) {
//       quill.root.innerHTML = noteToLoad.content;
//     }
//   }
  
//   // Load notes and display them when the page loads
//   window.onload = function() {
//     displayNotes(); // Show the list of saved notes
//   };



//   // Delete a note by its title
// function deleteNote(noteTitle) {
//     let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
//     localStorage.setItem('notes', JSON.stringify(savedNotes));
//     alert(`Note "${noteTitle}" deleted!`);
//     displayNotes();  // Refresh the saved notes list
//     quill.root.innerHTML = ''; // Clear the editor
//     currentNoteTitle = null;  // Reset current note
//   }
  
//   // Load notes and display them when the page loads
//   window.onload = function() {
//     displayNotes(); // Show the list of saved notes
//   };
  

//   ///

//   let currentNoteTitle = null; // Track the title of the note currently being edited

// // Save or update note content to localStorage
// function saveNote() {
//   const noteContent = quill.root.innerHTML;
//   let noteTitle = currentNoteTitle;

//   // If editing a note, keep the title, else prompt for a new one
//   if (!noteTitle) {
//     noteTitle = prompt("Enter a title for your note:");
//     if (!noteTitle) {
//       alert('Note title is required!');
//       return;
//     }
//   }

//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

//   if (currentNoteTitle) {
//     // Update existing note
//     const noteIndex = savedNotes.findIndex(note => note.title === currentNoteTitle);
//     if (noteIndex !== -1) {
//       savedNotes[noteIndex].content = noteContent;
//       alert('Note updated!');
//     }
//   } else {
//     // Check if the title already exists when creating a new note
//     const noteExists = savedNotes.some(note => note.title === noteTitle);
//     if (noteExists) {
//       alert('A note with this title already exists! Please choose a different title.');
//       return;
//     }
//     // Save the new note
//     savedNotes.push({ title: noteTitle, content: noteContent });
//     alert('Note saved!');
//   }

//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   displayNotes();  // Refresh the saved notes list
//   currentNoteTitle = null; // Reset current note title after saving
// }

// // Display saved notes by their titles in a list
// function displayNotes() {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const notesList = document.getElementById('saved-notes-list');
//   notesList.innerHTML = ''; // Clear the current list

//   savedNotes.forEach(note => {
//     const noteItem = document.createElement('li');
//     noteItem.textContent = note.title;
//     noteItem.setAttribute('data-title', note.title);
    
//     // Edit on click
//     noteItem.onclick = () => loadNoteByTitle(note.title);
    
//     // Add a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = (event) => {
//       event.stopPropagation(); // Prevent triggering the note loading
//       deleteNote(note.title);
//     };
    
//     noteItem.appendChild(deleteButton);
//     notesList.appendChild(noteItem);
//   });
// }

// // Load a specific note by its title
// function loadNoteByTitle(noteTitle) {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const noteToLoad = savedNotes.find(note => note.title === noteTitle);
  
//   if (noteToLoad) {
//     quill.root.innerHTML = noteToLoad.content;
//     currentNoteTitle = noteToLoad.title; // Set the current note for editing
//   }
// }

// // Delete a note by its title
// function deleteNote(noteTitle) {
//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   alert(`Note "${noteTitle}" deleted!`);
//   displayNotes();  // Refresh the saved notes list
//   quill.root.innerHTML = ''; // Clear the editor
//   currentNoteTitle = null;  // Reset current note
// }

// // Load notes and display them when the page loads
// window.onload = function() {
//   displayNotes(); // Show the list of saved notes
// };

// ////////

// // let currentNoteTitle = null; // Track the title of the note currently being edited

// // Save or update note content to localStorage
// function saveNote() {
//   const noteContent = quill.root.innerHTML;
//   let noteTitle = currentNoteTitle;

//   // If editing a note, keep the title, else prompt for a new one
//   if (!noteTitle) {
//     noteTitle = prompt("Enter a title for your note:");
//     if (!noteTitle) {
//       alert('Note title is required!');
//       return;
//     }
//   }

//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

//   if (currentNoteTitle) {
//     // Update existing note
//     const noteIndex = savedNotes.findIndex(note => note.title === currentNoteTitle);
//     if (noteIndex !== -1) {
//       savedNotes[noteIndex].content = noteContent;
//       alert('Note updated!');
//     }
//   } else {
//     // Check if the title already exists when creating a new note
//     const noteExists = savedNotes.some(note => note.title === noteTitle);
//     if (noteExists) {
//       alert('A note with this title already exists! Please choose a different title.');
//       return;
//     }
//     // Save the new note
//     savedNotes.push({ title: noteTitle, content: noteContent });
//     alert('Note saved!');
//   }

//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   displayNotes();  // Refresh the saved notes list
//   currentNoteTitle = null; // Reset current note title after saving
// }

// // Display saved notes by their titles in a list
// function displayNotes() {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const notesList = document.getElementById('saved-notes-list');
//   notesList.innerHTML = ''; // Clear the current list

//   savedNotes.forEach(note => {
//     const noteItem = document.createElement('li');
//     noteItem.textContent = note.title;
//     noteItem.setAttribute('data-title', note.title);
    
//     // Edit on click
//     noteItem.onclick = () => loadNoteByTitle(note.title);
    
//     // Add a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = (event) => {
//       event.stopPropagation(); // Prevent triggering the note loading
//       deleteNote(note.title);
//     };
    
//     noteItem.appendChild(deleteButton);
//     notesList.appendChild(noteItem);
//   });
// }

// // Load a specific note by its title
// function loadNoteByTitle(noteTitle) {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const noteToLoad = savedNotes.find(note => note.title === noteTitle);
  
//   if (noteToLoad) {
//     quill.root.innerHTML = noteToLoad.content;
//     currentNoteTitle = noteToLoad.title; // Set the current note for editing
//   }
// }

// // Delete a note by its title
// function deleteNote(noteTitle) {
//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   alert(`Note "${noteTitle}" deleted!`);
//   displayNotes();  // Refresh the saved notes list
//   quill.root.innerHTML = ''; // Clear the editor
//   currentNoteTitle = null;  // Reset current note
// }

// // Load notes and display them when the page loads
// window.onload = function() {
//   displayNotes(); // Show the list of saved notes
// };



// /////////


// //let currentNoteTitle = null; // Track the title of the note currently being edited

// // Save or update note content to localStorage
// function saveNote() {
//   const noteContent = quill.root.innerHTML;
//   let noteTitle = currentNoteTitle;

//   // If editing a note, keep the title, else prompt for a new one
//   if (!noteTitle) {
//     noteTitle = prompt("Enter a title for your note:");
//     if (!noteTitle) {
//       alert('Note title is required!');
//       return;
//     }
//   }

//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

//   if (currentNoteTitle) {
//     // Update existing note
//     const noteIndex = savedNotes.findIndex(note => note.title === currentNoteTitle);
//     if (noteIndex !== -1) {
//       savedNotes[noteIndex].content = noteContent;
//       alert('Note updated!');
//     }
//   } else {
//     // Check if the title already exists when creating a new note
//     const noteExists = savedNotes.some(note => note.title === noteTitle);
//     if (noteExists) {
//       alert('A note with this title already exists! Please choose a different title.');
//       return;
//     }
//     // Save the new note
//     savedNotes.push({ title: noteTitle, content: noteContent });
//     alert('Note saved!');
//   }

//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   displayNotes();  // Refresh the saved notes list
//   currentNoteTitle = null; // Reset current note title after saving
// }

// // Display saved notes by their titles in a list
// function displayNotes() {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const notesList = document.getElementById('saved-notes-list');
//   notesList.innerHTML = ''; // Clear the current list

//   savedNotes.forEach(note => {
//     const noteItem = document.createElement('li');
//     noteItem.textContent = note.title;
//     noteItem.setAttribute('data-title', note.title);
    
//     // Edit on click
//     noteItem.onclick = () => loadNoteByTitle(note.title);
    
//     // Add a delete button
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.onclick = (event) => {
//       event.stopPropagation(); // Prevent triggering the note loading
//       deleteNote(note.title);
//     };
    
//     noteItem.appendChild(deleteButton);
//     notesList.appendChild(noteItem);
//   });
// }

// // Toggle the visibility of the saved notes section
// function toggleNotes() {
//   const savedNotesSection = document.getElementById('saved-notes');
//   if (savedNotesSection.style.display === 'none' || savedNotesSection.style.display === '') {
//     displayNotes();  // Fetch and display notes when the section is shown
//     savedNotesSection.style.display = 'block'; // Show saved notes section
//   } else {
//     savedNotesSection.style.display = 'none'; // Hide saved notes section
//   }
// }

// // Load a specific note by its title
// function loadNoteByTitle(noteTitle) {
//   const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   const noteToLoad = savedNotes.find(note => note.title === noteTitle);
  
//   if (noteToLoad) {
//     quill.root.innerHTML = noteToLoad.content;
//     currentNoteTitle = noteToLoad.title; // Set the current note for editing
//   }
// }

// // Delete a note by its title
// function deleteNote(noteTitle) {
//   let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
//   savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
//   localStorage.setItem('notes', JSON.stringify(savedNotes));
//   alert(`Note "${noteTitle}" deleted!`);
//   displayNotes();  // Refresh the saved notes list
//   quill.root.innerHTML = ''; // Clear the editor
//   currentNoteTitle = null;  // Reset current note
// }

// // Load notes and display them when the page loads
// window.onload = function() {
//   const savedTheme = localStorage.getItem('theme') || 'light-mode';
//   document.body.classList.add(savedTheme);
// };


// ////

//let currentNoteTitle = null; // Track the title of the note currently being edited
//const AUTOSAVE_INTERVAL = 3000; // Autosave interval in milliseconds (3 seconds)

// Save or update note content to localStorage
function saveNote() {
  const noteContent = quill.root.innerHTML;
  let noteTitle = currentNoteTitle;

  // If editing a note, keep the title, else prompt for a new one
  if (!noteTitle) {
    noteTitle = prompt("Enter a title for your note:");
    if (!noteTitle) {
      alert('Note title is required!');
      return;
    }
  }

  let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

  if (currentNoteTitle) {
    // Update existing note
    const noteIndex = savedNotes.findIndex(note => note.title === currentNoteTitle);
    if (noteIndex !== -1) {
      savedNotes[noteIndex].content = noteContent;
      if (savedNotes[noteIndex].title !== noteTitle) {
        // If title is changed, update the title
        savedNotes[noteIndex].title = noteTitle;
        alert('Note title updated!');
      } else {
        alert('Note updated!');
      }
    }
  } else {
    // Check if the title already exists when creating a new note
    const noteExists = savedNotes.some(note => note.title === noteTitle);
    if (noteExists) {
      alert('A note with this title already exists! Please choose a different title.');
      return;
    }
    // Save the new note
    savedNotes.push({ title: noteTitle, content: noteContent });
    alert('Note saved!');
  }

  localStorage.setItem('notes', JSON.stringify(savedNotes));
  displayNotes();  // Refresh the saved notes list
  currentNoteTitle = null; // Reset current note title after saving
}

// Autosave function
function autosave() {
  if (currentNoteTitle) {
    saveNote();
  }
}

// Load a specific note by its title
function loadNoteByTitle(noteTitle) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const noteToLoad = savedNotes.find(note => note.title === noteTitle);
  
  if (noteToLoad) {
    quill.root.innerHTML = noteToLoad.content;
    currentNoteTitle = noteToLoad.title; // Set the current note for editing
  }
}

// Delete a note by its title
function deleteNote(noteTitle) {
  let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
  localStorage.setItem('notes', JSON.stringify(savedNotes));
  alert(`Note "${noteTitle}" deleted!`);
  displayNotes();  // Refresh the saved notes list
  quill.root.innerHTML = ''; // Clear the editor
  currentNoteTitle = null;  // Reset current note
}

// Display saved notes by their titles in a list
function displayNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesList = document.getElementById('saved-notes-list');
  notesList.innerHTML = ''; // Clear the current list

  savedNotes.forEach(note => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note.title;
    noteItem.setAttribute('data-title', note.title);
    
    // Edit on click
    noteItem.onclick = () => loadNoteByTitle(note.title);
    
    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = (event) => {
      event.stopPropagation(); // Prevent triggering the note loading
      deleteNote(note.title);
    };
    
    // Add an edit title button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Title';
    editButton.onclick = (event) => {
      event.stopPropagation(); // Prevent triggering the note loading
      editNoteTitle(note.title);
    };
    
    noteItem.appendChild(editButton);
    noteItem.appendChild(deleteButton);
    notesList.appendChild(noteItem);
  });
}

// Edit the title of a note
function editNoteTitle(oldTitle) {
  const newTitle = prompt('Enter a new title for your note:', oldTitle);
  if (newTitle && newTitle !== oldTitle) {
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteIndex = savedNotes.findIndex(note => note.title === oldTitle);

    if (noteIndex !== -1) {
      savedNotes[noteIndex].title = newTitle;
      localStorage.setItem('notes', JSON.stringify(savedNotes));
      alert('Note title updated!');
      displayNotes();  // Refresh the saved notes list
    }
  }
}

// Toggle the visibility of the saved notes section
function toggleNotes() {
  const savedNotesSection = document.getElementById('saved-notes');
  if (savedNotesSection.style.display === 'none' || savedNotesSection.style.display === '') {
    displayNotes();  // Fetch and display notes when the section is shown
    savedNotesSection.style.display = 'block'; // Show saved notes section
  } else {
    savedNotesSection.style.display = 'none'; // Hide saved notes section
  }
}

// Apply the user's saved theme preference on load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  document.body.classList.add(savedTheme);
  
  // Check if there are unsaved notes and restore them
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const unsavedNote = savedNotes.find(note => note.title === currentNoteTitle);
  if (unsavedNote) {
    quill.root.innerHTML = unsavedNote.content;
  }
  
  // Start autosave timer
  setInterval(autosave, AUTOSAVE_INTERVAL);
};

// Save the note when the user leaves the page
window.addEventListener('beforeunload', function() {
  saveNote();
});


//

let currentNoteTitle = null; // Track the title of the note currently being edited
const AUTOSAVE_INTERVAL = 3000; // Autosave interval in milliseconds (3 seconds)

// Initialize Quill editor
const quill = new Quill('#editor', {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }]
    ]
  }
});

// Save or update note content to localStorage
function saveNote() {
  const noteContent = quill.root.innerHTML;
  let noteTitle = currentNoteTitle;

  // If editing a note, keep the title, else prompt for a new one
  if (!noteTitle) {
    noteTitle = prompt("Enter a title for your note:");
    if (!noteTitle) {
      alert('Note title is required!');
      return;
    }
  }

  let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

  if (currentNoteTitle) {
    // Update existing note
    const noteIndex = savedNotes.findIndex(note => note.title === currentNoteTitle);
    if (noteIndex !== -1) {
      savedNotes[noteIndex].content = noteContent;
      if (savedNotes[noteIndex].title !== noteTitle) {
        // If title is changed, update the title
        savedNotes[noteIndex].title = noteTitle;
        alert('Note title updated!');
      } else {
        alert('Note updated!');
      }
    }
  } else {
    // Check if the title already exists when creating a new note
    const noteExists = savedNotes.some(note => note.title === noteTitle);
    if (noteExists) {
      alert('A note with this title already exists! Please choose a different title.');
      return;
    }
    // Save the new note
    savedNotes.push({ title: noteTitle, content: noteContent });
    alert('Note saved!');
  }

  localStorage.setItem('notes', JSON.stringify(savedNotes));
  displayNotes();  // Refresh the saved notes list
  currentNoteTitle = null; // Reset current note title after saving
}

// Autosave function
function autosave() {
  if (currentNoteTitle) {
    saveNote();
  }
}

// Load a specific note by its title
function loadNoteByTitle(noteTitle) {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const noteToLoad = savedNotes.find(note => note.title === noteTitle);
  
  if (noteToLoad) {
    quill.root.innerHTML = noteToLoad.content;
    currentNoteTitle = noteToLoad.title; // Set the current note for editing
  }
}

// Delete a note by its title
function deleteNote(noteTitle) {
  let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  savedNotes = savedNotes.filter(note => note.title !== noteTitle); // Remove the note
  localStorage.setItem('notes', JSON.stringify(savedNotes));
  alert(`Note "${noteTitle}" deleted!`);
  displayNotes();  // Refresh the saved notes list
  quill.root.innerHTML = ''; // Clear the editor
  currentNoteTitle = null;  // Reset current note
}

// Display saved notes by their titles in a list
function displayNotes() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const notesList = document.getElementById('saved-notes-list');
  notesList.innerHTML = ''; // Clear the current list

  savedNotes.forEach(note => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note.title;
    noteItem.setAttribute('data-title', note.title);
    
    // Edit on click
    noteItem.onclick = () => loadNoteByTitle(note.title);
    
    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = (event) => {
      event.stopPropagation(); // Prevent triggering the note loading
      deleteNote(note.title);
    };
    
    // Add an edit title button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Title';
    editButton.onclick = (event) => {
      event.stopPropagation(); // Prevent triggering the note loading
      editNoteTitle(note.title);
    };
    
    noteItem.appendChild(editButton);
    noteItem.appendChild(deleteButton);
    notesList.appendChild(noteItem);
  });
}

// Edit the title of a note
function editNoteTitle(oldTitle) {
  const newTitle = prompt('Enter a new title for your note:', oldTitle);
  if (newTitle && newTitle !== oldTitle) {
    let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const noteIndex = savedNotes.findIndex(note => note.title === oldTitle);

    if (noteIndex !== -1) {
      savedNotes[noteIndex].title = newTitle;
      localStorage.setItem('notes', JSON.stringify(savedNotes));
      alert('Note title updated!');
      displayNotes();  // Refresh the saved notes list
    }
  }
}

// Create a new note by clearing the editor and resetting the title
function createNewNote() {
  quill.root.innerHTML = ''; // Clear the editor
  currentNoteTitle = null; // Reset current note title
}

// Toggle the visibility of the saved notes section
function toggleNotes() {
  const savedNotesSection = document.getElementById('saved-notes');
  if (savedNotesSection.style.display === 'none' || savedNotesSection.style.display === '') {
    displayNotes();  // Fetch and display notes when the section is shown
    savedNotesSection.style.display = 'block'; // Show saved notes section
  } else {
    savedNotesSection.style.display = 'none'; // Hide saved notes section
  }
}

// Apply the user's saved theme preference on load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  document.body.classList.add(savedTheme);
  
  // Check if there are unsaved notes and restore them
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const unsavedNote = savedNotes.find(note => note.title === currentNoteTitle);
  if (unsavedNote) {
    quill.root.innerHTML = unsavedNote.content;
  }
  
  // Start autosave timer
  setInterval(autosave, AUTOSAVE_INTERVAL);
};

// Save the note when the user leaves the page
window.addEventListener('beforeunload', function() {
  saveNote();
});
