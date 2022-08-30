import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const NotePage = () => {
    const params = useParams()
    const noteId = params.id
    const navigate = useNavigate()
    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    const getNote = async () => {
        if (noteId === 'new') return //solved ValueError at /api/notes/new/, 
        //stops the request below to be made

        const response = await fetch(`http://localhost:8000/api/notes/${noteId}/`)
        const data = await response.json()
        console.log(data)
        setNote(data)
    }

    const createNote = async () => {
      fetch(`http://localhost:8000/api/notes/`,{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      }
        )
        console.log(note)
    }

    const updateNote = async () => {
      fetch(`http://localhost:8000/api/notes/${noteId}/`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      }
        )
        console.log(note)
    }

    const deleteNote = async () => {
      fetch(`http://localhost:8000/api/notes/${noteId}/`,{
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      navigate('/')
    }

    const handleArrowSubmit = () => {
      console.log(note)
      if (noteId !== 'new' && !note.body){
        console.log('DELETE WORKING')
        deleteNote()
      }else if(noteId !== 'new' ){
        console.log('UPDATE WORKING')
        updateNote()
      }else if(noteId === 'new' && note.body !== null){
        console.log('CREATE WORKING')
        createNote()
      }
      
      navigate('/')
    }

    const handleChange = (e) => {
      setNote((prevValue)=>{
          return {...prevValue, 'body':e.target.value}
      })
    }
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick={handleArrowSubmit}/>
        </h3>
        {noteId !== 'new'? (
          <button onClick={deleteNote}>Delete</button>
        ): (
          <button onClick={handleArrowSubmit}>Done</button>
        )}
        
      </div>
    <textarea onChange={handleChange} value={note?.body}></textarea> 
    </div>
  )
}

// (e) => { setNote({...note, 'body': e.target.value})}
//before we were using defaultValue in text area and deleting/removing text was not working properly,
//with value issue is resolved