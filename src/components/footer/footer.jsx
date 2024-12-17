import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
        <div className='upf'>
            <a href="https://gb.ru/blog/hakaton/">About Us</a>
            <Link to='/Contact'>Contact</Link>
            <Link to='/Team'>Team</Link>
        </div>
        <div className="downf">
            <p>Hackathon&trade;. All Rights Reserved</p>
        </div>

    </footer>
  )
}

export default Footer;