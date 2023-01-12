import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import './Banner.css'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"


const Banner = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div>
      <NavLink to={'/'}><h1>Olivia Ruth Arts</h1></NavLink>
      <nav className={hamburgerOpen ? 'hide': 'navStyling'} >
        <NavLink
          className={selectedItem === 'glass' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('glass')}
          to={'/glass'}>Glass</NavLink>
        <NavLink
          className={selectedItem === 'paintings-drawings' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('paintings-drawings')}
          to={'/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink
          className={selectedItem === 'print' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('print')}
          to={'/print'}>Print Making</NavLink>
        <NavLink
          className={selectedItem === 'fiber' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('fiber')}
          to={'/fiber'}>Fiber Art</NavLink>
        <NavLink
          className={selectedItem === 'developmental' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('developmental')}
          to={'/developmental'}>Developmental Art</NavLink>
        <NavLink
          className={selectedItem === 'about-the-site' ? 'selected menuItem' : 'menuItem'}
          onClick={() => setSelectedItem('about-the-site')}
          to={'/about-the-site'}>About the Site</NavLink>
      </nav>
      <div className="hamburger" onClick={toggleHamburger}>
        <HamburgerMenu isOpen={hamburgerOpen}/>
      </div>
    </div>
  )
}

export default Banner