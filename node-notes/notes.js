var addNote = (title, body) => {
  console.log('addNote:', title, body);
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
