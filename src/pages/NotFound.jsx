import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry, that page cannot be found.</h2>
      <Link to="/">Return Home</Link>
    </div>
  )
}

export default NotFound
