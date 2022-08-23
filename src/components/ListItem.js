import React from 'react'
import { Link } from 'react-router-dom'
export const ListItem = (props) => {
  return (
    <Link to={`/note/${props.note.id}`}>
      {props.note.body}
      </Link>
  )
}

