import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import './Banner.css'
import logo from "../assets/ojLogo2.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  console.log(window
  )
  const toggleHamburger = () => {
    if (window.width < 767)
      setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <div className="navMenu">
      <a
        href="https://www.instagram.com/ojrutharts/">
        <FontAwesomeIcon className="contactOlivia" icon={faInstagram} />
      </a>
      <a
        href="mailto: olivia.ruth@me.com">
        <FontAwesomeIcon className="contactOlivia" icon={faEnvelope} />
      </a>
      <NavLink
        to={'/'}
        onClick={() => setSelectedItem(null)}>
        <img
          src={logo}
          className="bannerImage"
        />
      </NavLink>
      <nav className={hamburgerOpen ? 'hide' : 'navStyling'} >
        <NavLink
          className={selectedItem === 'glass' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            setSelectedItem('glass')
          }}
          to={'/glass'}>Glass</NavLink>
        <NavLink
          className={selectedItem === 'paintings-drawings' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            setSelectedItem('paintings-drawings')
          }}
          to={'/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink
          className={selectedItem === 'print' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            setSelectedItem('print')
          }}
          to={'/print'}>Print Making</NavLink>
        <NavLink
          className={selectedItem === 'fiber' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            setSelectedItem('fiber')
          }}
          to={'/fiber'}>Fiber Art</NavLink>
        <NavLink
          className={selectedItem === 'developmental' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            setSelectedItem('developmental')
          }}
          to={'/developmental'}>Developmental Art</NavLink>
        <NavLink
          className={selectedItem === 'about-the-site' ? 'selected menuItem' : 'menuItem'}
          onClick={() => {
            toggleHamburger()
            setSelectedItem('about-the-site')
          }}
          to={'/about-the-site'}>About the Site</NavLink>
      </nav>
      <FontAwesomeIcon
        className="hamburger"
        icon={faBars}
        // isOpen={hamburgerOpen}
        onClick={toggleHamburger} />
    </div>
  )
}

export default Banner