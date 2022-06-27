import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

const  [notes, setnotes] = React.useState([])

     function addNote(newNote){
      
      setnotes(prevNote =>{
        return [...prevNote , newNote]
      })
     }

function deletenote(id){
  setnotes(function (prevNotes){
    return( prevNotes.filter(function(noteItem, index){
      return index !== id
    }))
  })
  
}

  return (
    <div>
      <Header />
      <CreateArea
      onAdd = {addNote}
      />
      {notes.map(function (noteItem, index){
        return (
          <Note
          key={index}
            id={index} 
          title = {noteItem.title}
          content= {noteItem.content}
          onDelete ={deletenote}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
