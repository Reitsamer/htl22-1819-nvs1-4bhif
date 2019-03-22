const fs = require('fs');
const chalk = require('chalk');

// CHALLENGE:
// 1. Use 'chalk' to print success/error messages with green/red background
// 2. Extract code for loading notes -> fetchNotes() (returns array of notes)
// 3. Extract code for saving notes -> saveNotes(notes)

// Checklist für neues Modul:
// 1. npmjs.com: Modul suchen
// 2. Install: npm install ...
// 3. Require: const ... = require('...');
// 4. Use module ...


var fetchNotes = () => {
  try {
    // READ FILE 'notes-data.json'
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return []
  }
}

// var fetchNotes = function() {
//
// }
//
// function fetchNotes() {
//
// }

var saveNotes = (notes) => {
  // WRITE FILE
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
  // Define array
  var notes = fetchNotes();

  var newNote = {
    title: title,
    body: body
  };

  // var duplicateNotes = notes.filter((note) => {
  //   return note.title === newNote.title;
  // });

  var duplicateNotes = notes.filter((note) => note.title === newNote.title);


  // Note with same title exits?
  if (duplicateNotes.length > 0) {
    console.log(chalk.bgRed.white(`Note with title '${title}' already exists!`));
    return;
  }

  // ADD NEW NOTE TO ARRAY
  notes.push(newNote);

  saveNotes(notes);

  console.log(chalk.bgGreen.white('Success!'));
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
