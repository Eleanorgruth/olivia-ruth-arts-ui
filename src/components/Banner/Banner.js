import React from "react"
import { Link } from "react-router-dom"
import './Banner.css'

const Banner = () => {

  return (
    <div>
      <h1>Olivia Ruth Arts</h1>
      <nav>
        <Link to={'/test'}>Test</Link>
        <Link to={'/about-the-site'}>About the Site</Link>
      </nav>
    </div>
  )
}

export default Banner