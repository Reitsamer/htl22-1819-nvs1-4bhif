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

var saveNotes = (notes) => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

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
  return newNote;
}

var getNote = (title) => {
  var notes = fetchNotes();

  var foundNotes = notes.filter((note) => note.title === title);

  return foundNotes[0]
}

var getAll = () => {
  return fetchNotes();
}

var removeNote = (title) => {
  var allNotes = fetchNotes();

  var remainingNotes = allNotes.filter((note) => note.title !== title);

  saveNotes(remainingNotes);

  return allNotes.length !== remainingNotes.length;
}

// Title: ...
// Body: ...

var logNote = (note) => {
  console.log(chalk.blue('Title: '), note.title);
  console.log(chalk.red('Body: '), note.body);
}

module.exports = {
  addNote,
  getNote,
  getAll,
  removeNote,
  logNote
}
