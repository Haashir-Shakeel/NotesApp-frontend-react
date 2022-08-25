import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

export const NotePage = () => {
    const params = useParams()
    const noteId = params.id
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

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft/>
          </Link>
        </h3>
      </div>
    <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

