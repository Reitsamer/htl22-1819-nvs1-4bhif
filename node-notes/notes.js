const fs = require('fs');

// CHALLENGE:
// 1. Use 'chalk' to print success/error messages with green/red background
// 2. Extract code for loading notes -> fetchNotes() (returns array of notes)
// 3. Extract code for saving notes -> saveNotes(notes)

var addNote = (title, body) => {
  // Define array
  var notes = [];

  var newNote = {
    title: title,
    body: body
  };

  try {
    // READ FILE 'notes-data.json'
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }

  // var duplicateNotes = notes.filter((note) => {
  //   return note.title === newNote.title;
  // });

  var duplicateNotes = notes.filter((note) => note.title === newNote.title);


  // Note with same title exits?
  if (duplicateNotes.length > 0) return;

  // ADD NEW NOTE TO ARRAY
  notes.push(newNote);

  // WRITE FILE
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var getNote = (title) => {
  console.log(`getNote: ${title}`);
}

var getAll = () => {
  console.log('getAll.');
}

var removeNote = (title) => {
  console.log('removeNote', title);
}

module.exports = {
  addNote,
  getNote,
  getAll,
  removeNote
}
