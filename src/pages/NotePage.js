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
        const response = await fetch(`/api/notes/${noteId}/`)
        const data = await response.json()
        console.log(data)
        setNote(data)
    }

    const updateNote = async () => {
      fetch(`/api/notes/${noteId}/update/`,{
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      }
        )
    }

    const handleArrowSubmit = () => {
      updateNote()
      navigate('/')
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick={handleArrowSubmit}/>
        </h3>
      </div>
    <textarea onChange={(e) => { setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

