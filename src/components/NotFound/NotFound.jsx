import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="container404">
        <p className="error-code">404</p>
        <p className="message">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="home-link">Go Back Home</a>
    </div>
  )
}

export default NotFound