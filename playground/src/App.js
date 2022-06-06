import Note from './components/Note'
import { useState } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(    'a new note...'  ) 
  const [showAll, setShowAll] = useState(true)
  //console.log(notes)
  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  //console.log(notesToShow)
  const addNote = (event) => {
    event.preventDefault()
    console.log("button clicked",event.target)
    if(newNote != '') {
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() <0.5,
      id: notes.length+1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  } else {
    console.log('Empty value, not appending')
  }

  }
  const handleNoteChange = (event) => {
    //console.log(event.target.value)
    setNewNote(event.target.value)
  }

    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={()=>setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <ul>
          {notesToShow.map(note =>
            <Note key={note.id} note={note} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange} />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }
  
  export default App