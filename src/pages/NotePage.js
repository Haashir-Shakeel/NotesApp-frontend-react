import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
    <p>{note?.body}</p>
    </div>
  )
}

