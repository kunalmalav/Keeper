import React, { useState } from 'react';
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
import createArea from "./createArea.jsx";


function App() {
    
    const [ notes, setNotes ] = useState([])

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

  return (
    <div>
      <Header />
      <createArea 
      onAdd = {addNote}
      />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
