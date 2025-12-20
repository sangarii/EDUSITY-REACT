import React from 'react'
import './Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <section className="footer container">
        <p>&copy; {currentYear} Edusity. All rights reserved.</p>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </section>
  )
}

export default Footer