import React from "react"
import { NavLink } from "react-router-dom"
import './Banner.css'

const Banner = () => {

  return (
    <div>
      <NavLink to={'/'}><h1>Olivia Ruth Arts</h1></NavLink>
      <nav>
        <NavLink to={'/glass'}>Glass</NavLink>
        <NavLink to={'/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink to={'/print'}>Print Making</NavLink>
        <NavLink to={'/fiber'}>Fiber Art</NavLink>
        <NavLink to={'/developmental'}>Developmental Art</NavLink>
        <NavLink to={'/about-the-site'}>About the Site</NavLink>
      </nav>
    </div>
  )
}

export default Banner