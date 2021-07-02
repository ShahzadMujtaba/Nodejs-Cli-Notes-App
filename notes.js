
const chalk = require('chalk');
const fs  = require('fs')
const getNotes = ()=>{
    return "Your notes..."
}
const addNotes = (title,body) =>{
 const notes = loadNotes()
 const duplicateNotes =   notes.filter((note)=>note.title==title)
 if(duplicateNotes.length==0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.white.bgGreen.bold("New Note Added"))
 }else{
    console.log(chalk.white.bgYellow.bold("Notes title taken"))
 }
  
}
// @Desc Remove notes
const removeNotes = (title)=>{
    const notes = loadNotes()
    // const remove = notes.filter((note)=>note.titel==="rs")
    // const duplicateNotes =   notes.filter((note)=>note.title==title)
    const notesToKeep = notes.filter((note)=>note.title!==title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse("No note found!"))
    }
    
}
const listnNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes"))
    notes.forEach(note=> {
        console.log(note.title)
    });

}
const saveNotes = (notes) =>{
  const dataJson = JSON.stringify(notes)
  fs.writeFileSync('notes.json',dataJson)

}

const loadNotes = () =>{
    try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJson = dataBuffer.toString()
    return JSON.parse(dataJson) 
    
    } catch (error) {
        return []
        console.log(chalk.white.bgRed.bold(error.message))
    }
   
}
module.exports ={ getNotes,addNotes,removeNotes,listnNotes}