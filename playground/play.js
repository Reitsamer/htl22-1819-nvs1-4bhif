const { Note, LoveNote } = require('./classes')

const aNote = new LoveNote('The Rain in Spain', 'Falls mainly on the plain', 'Justin')

aNote.body = "Test"
console.log(`Title: ${aNote.title}`)
console.log(`Body: ${aNote.body}`)
console.log(`Valentine: ${aNote.valentine}`)

console.log(aNote instanceof LoveNote)