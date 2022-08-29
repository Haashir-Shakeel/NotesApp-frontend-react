import React from 'react'
import { Link } from 'react-router-dom'

const getTitle = (note) => {
  const title = note.body.split('\n')[0]
  if (title.length > 45){
    return title.slice(0, 45)
  }
  return title
}

const getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}

const getBody = (note) => {
    const title = getTitle(note)
    let content = note.body.replaceAll('\n',' ') // replace all new line with space(instead of having new line we will add space )
    content = content.replaceAll(title,'') //replacing title with empty string and having just body

    if (content.length > 45){
      return content.slice(0, 45) + '...'
    }else{
      return content
    }
  }

export const ListItem = (props) => {
  return (
    <Link to={`/note/${props.note.id}`}>
      <div className='notes-list-item'>
        <h3>{getTitle(props.note)}</h3>
        <p>
          <span>{getTime(props.note)}</span>
          {getBody(props.note)}
        </p>
      </div>
      </Link>
      
  )
}

//props.note.body