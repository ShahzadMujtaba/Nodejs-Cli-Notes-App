const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');
const { argv } = require('yargs');

// custom version
yargs.version('1.1.0')

// Create add command
yargs.command({
    'command':'add',
    'describe':'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:"string"
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
   
    handler:function(argv){
        notes.addNotes(argv.title,argv.body)
        // console.log('Title',argv.title)
        // console.log('Body',argv.body)
    }
})

//  Remove command
yargs.command({
    'command':'remove',
    'describe':'Remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(){
        notes.removeNotes(argv.title)
        // console.log('removing the note')
    }
})

// Create read command
yargs.command({
    'command':'read',
    'describe':'Read a note',
    builder:{
    title:{
       describe:'Note title',
       demandOption:true,
       type:'string' 
    }
    },
    handler:function(argv){
        notes.readNote(argv.title)
        // console.log("reading the note")
    }
})

// Create list command
yargs.command({
    'command':'list',
    'describe':'List your note',
    handler:function(){
        notes.listnNotes()
        // console.log("listing out all notes")
    }
})
yargs.parse()
// console.log(yargs.argv)

// add, remove, read, list

