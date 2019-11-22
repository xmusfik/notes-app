const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => { return 'This is my note'; }

const loadnotes = () => {
    try {
        const bfNote = fs.readFileSync('notes.json')
        const strNote = bfNote.toString()
        return JSON.parse(strNote)
    }
    catch (e) {
        return []
    }

}
const saveNotes = (removeNotez) => {
    const convNotes = JSON.stringify(removeNotez)
    fs.writeFileSync('notes.json', convNotes)
}

//ADD NOTE FUNCTION //

const addNote = (title, body) => {
    const notes = loadnotes()
    debugger
    const duplicateNote=notes.find((note)=>note.title===title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }

    saveNotes(notes)

}
// END ADD NOTE FUNCTION //

//REMOVE NOTE FUNCTION //

const removeNote = (title) => {
    const notes = loadnotes()
    const removeNotez = notes.filter((note) => note.title !== title)
    if (removeNotez.length !== notes.length) {
        console.log(chalk.green.inverse('Removed desired note'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }

    // if (removeNotez === notes.title) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     console.log('New note added')
    // } else {
    //     console.log('Note title taken')
    // }

    saveNotes(removeNotez)
}

// END REMOVE NOTE FUNCTION //

//LIST NOTE FUNCTION //
const listNotes=()=>{
    const notes=loadnotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
    console.log(chalk.red.inverse('Your Notes'))
}
// END LIST NOTE FUNCTION //

//READ NOTE FUNCTION //
const readNotes=(title)=>{
    const notes=loadnotes()
    const srearNote=notes.find((note)=>note.title===title)
    if(srearNote){
        console.log(chalk.blue.inverse(srearNote.title))
        console.log(srearNote.body)
    }else{
        console.log('Not Found')
    }
}
// END READ NOTE FUNCTION //





module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNotes:readNotes
}