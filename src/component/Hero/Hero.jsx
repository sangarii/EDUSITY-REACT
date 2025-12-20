import React from 'react'
import './Hero.css';
import dark_arrow from '../../asset/dark-arrow.png'
const Hero = () => {
  return (
    <section className='hero container'>
      <article className="hero-text">
        <h1>We Ensure better education for a better world</h1>
     <p>Our cutting-edge curriculam is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
     <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </article>
    </section>
  )
}

export default Hero