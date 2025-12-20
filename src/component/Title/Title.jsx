import React from 'react'
import './Title.css'
const Title = ({subTitle, title}) => {
  return (
    <section className='title container'>
        <p>{subTitle} </p>
        <h2>{title} </h2>
    </section>
  )
}

export default Title