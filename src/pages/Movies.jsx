import React from 'react'
import './movies.css'

const Movies = (props) => {
  return (
    <div className='movies'>
      <h1>{props.title}</h1>
      <img src={props.poster} alt=""></img>
      <p>({props.year})</p>
    </div>
  )
}

export default Movies