import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import './Banner.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)
  const { type } = useParams()

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div className="navMenu">
      <NavLink to={'/'}><h1>Olivia Ruth Arts</h1></NavLink>
      <nav className={hamburgerOpen ? 'hide': 'navStyling'} >
        <NavLink
          className={selectedItem === 'glass' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('glass')}}
          to={'/glass'}>Glass</NavLink>
        <NavLink
          className={selectedItem === 'paintings-drawings' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('paintings-drawings')
          }}
          to={'/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink
          className={selectedItem === 'print' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('print')
          }}
          to={'/print'}>Print Making</NavLink>
        <NavLink
          className={selectedItem === 'fiber' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('fiber')
          }}
          to={'/fiber'}>Fiber Art</NavLink>
        <NavLink
          className={selectedItem === 'developmental' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('developmental')
          }}
          to={'/developmental'}>Developmental Art</NavLink>
        <NavLink
          className={selectedItem === 'about-the-site' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            // toggleHamburger()
            setSelectedItem('about-the-site')
          }}
          to={'/about-the-site'}>About the Site</NavLink>
      </nav>
        <FontAwesomeIcon
          className="hamburger"
          icon={faBars}
          // isOpen={hamburgerOpen}
          onClick={toggleHamburger}/>
    </div>
  )
}

export default Banner