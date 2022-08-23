import React, { useEffect, useState } from 'react'

export const NotesListPage = () => {
const [notes, setNotes] = useState([])

useEffect(()=>{
  getNotes()
},[])

const getNotes = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/notes/')
  const data = await response.json()
  setNotes(data)
}

  return (
    <div>
      <div className='notes-list'>
        {
        notes.map((note, index)=> {
          return <h4 key={index}>{note.body}</h4>
        })
        }
      </div>
    </div>
  )
}

