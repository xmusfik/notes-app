const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//add,remove,read,list
// add note command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// remove note command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// List note command
yargs.command({
    command: 'list',
    describe: 'list the note',
    handler(argv) {
        notes.listNotes()
    }
})
// read note command
yargs.command({
    command: 'read',
    describe: 'read a note',
    title: {
        describe: 'Note Title',
        demandOption: true,
        type: 'string'
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})
yargs.parse()


