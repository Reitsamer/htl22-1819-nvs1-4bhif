const fs = require('fs');

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
