const notes = require('./notes');

// add --title="Einkaufen" --body="3 Eier, Milch"
// list
// read --title "Einkaufen"
// remove --title Einkaufen

var command = process.argv[2];

console.log(command);

// console.log(process.argv);

var title = 'Test';
var body = 'Gehe mit dem Hund spazieren'

if (command === 'add') {
  notes.addNote(title, body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(title);
} else if (command === 'remove') {
  notes.removeNote(title);
} else {
  console.error('Command not recognized.');
}
