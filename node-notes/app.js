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
