import React, { useEffect, useState } from 'react'
import { ListItem } from '../components/ListItem'

export const NotesListPage = () => {
const [notes, setNotes] = useState([])

useEffect(()=>{
  getNotes()
},[])

const getNotes = async () => {
  const response = await fetch('/api/notes/')
  const data = await response.json()
  setNotes(data)
}

  return (
    <div>
      <div className='notes-list'>
        {
        notes.map((note, index)=> {
          return <ListItem key={index} note={note}/>
        })
        }
      </div>
    </div>
  )
}

