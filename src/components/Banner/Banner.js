import React from "react"
import { NavLink } from "react-router-dom"
import './Banner.css'

const Banner = () => {

  return (
    <div>
      <NavLink to={'/'}><h1>Olivia Ruth Arts</h1></NavLink>
      <nav>
        <NavLink className ="menuItem" to={'/glass'}>Glass</NavLink>
        <NavLink className ="menuItem" to={'/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink className ="menuItem" to={'/print'}>Print Making</NavLink>
        <NavLink className ="menuItem" to={'/fiber'}>Fiber Art</NavLink>
        <NavLink className ="menuItem" to={'/developmental'}>Developmental Art</NavLink>
        <NavLink className ="menuItem" to={'/about-the-site'}>About the Site</NavLink>
      </nav>
    </div>
  )
}

export default Banner