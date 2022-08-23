import React, { useEffect, useState } from 'react'

export const NotesListPage = () => {
const [notes, setNotes] = useState([])

useEffect(()=>{
  getNotes()
},[])

const getNotes = async () => {
  const response = await fetch('http://127.0.0.1:8000/api/notes/')
  const data = await response.json()
  console.log('DATA:',data)
  setNotes(data)
}

  return (
    <div>Notes</div>
  )
}

