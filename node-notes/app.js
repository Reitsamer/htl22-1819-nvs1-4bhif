const yargs = require('yargs');

const notes = require('./notes');

// add --title="Einkaufen" --body="3 Eier, Milch"
// list
// read --title "Einkaufen"
// remove --title Einkaufen

// console.log(yargs.argv);

var argv = yargs.argv;

var command = process.argv[2];

var title = argv.title;
var body = argv.body;

if (command === 'add') {
  var note = notes.addNote(title, body);
  if (note !== undefined) {
    notes.logNote(note);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();

  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var foundNote = notes.getNote(title);
  if (foundNote !== undefined) {
    notes.logNote(foundNote);
  } else {
    console.log('No with title:', title);
  }
} else if (command === 'remove') {
  var success = notes.removeNote(title);
  if (success) {
    console.log('Removed note with title:', title);
  } else {
    console.log('Could not find note with title:', title);
  }

} else {
  console.error('Command not recognized.');
}
