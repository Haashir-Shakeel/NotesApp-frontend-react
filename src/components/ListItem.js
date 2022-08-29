import React from 'react'
import { Link } from 'react-router-dom'

const getTitle = (note) => {
  const title = note.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0, 45)
  }
  return title
}

export const ListItem = (props) => {
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className='notes-list-item'>
        <h3>{getTitle(props.note)}</h3>
      </div>
      </Link>
      
  )
}

//props.note.body