import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import './Banner.css'
import logo from "../assets/ojLogo2.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(true)

  const selectMenuItem = (selection) => {
    setSelectedItem(selection)
    if (window.innerWidth < 767) {
      setHamburgerOpen(!hamburgerOpen)
    }
  }
  const styleSelectedMenuItem = (selected) => {
    if (selectedItem === selected) {
      return 'selected menuItem'
    } else {
      return 'menuItem'
    }
  }
  const showHambergerMenu = () => {
    if (!hamburgerOpen && window.innerWidth < 767) {
      return (<FontAwesomeIcon
        className={"hamburger"}
        icon={faBars}
        onClick={() => {
          selectMenuItem(null)
        }} />)
    } else if (hamburgerOpen && window.innerWidth < 767) {
      return <FontAwesomeIcon
        className={"close"}
        icon={faX}
        onClick={() => {
          selectMenuItem(null)
        }} />
    }
  }

  return (
    <div className="navMenu">
      <a
        className="instagram"
        href="https://www.instagram.com/ojrutharts/">
        <FontAwesomeIcon className="contactOlivia" icon={faInstagram} />
      </a>
      <a
        className="email"
        href="mailto: olivia.ruth@me.com">
        <FontAwesomeIcon className="contactOlivia" icon={faEnvelope} />
      </a>
      <NavLink
        to={'/'}
        onClick={() => setSelectedItem(null)}>
        <img
          src={logo}
          alt={"Olivia Ruth Arts Logo"}
          className="bannerImage"
        />
      </NavLink>
      <nav
        className={hamburgerOpen ? 'navStyling' : 'hide'}
      >
        <NavLink
          className={styleSelectedMenuItem('glass')}
          onClick={() => {
            selectMenuItem('glass')
          }}
          to={'art/glass'}>Glass</NavLink>
        <NavLink
          className={styleSelectedMenuItem('paintings-drawings')}
          onClick={() => {
            selectMenuItem('paintings-drawings')
          }}
          to={'art/paintings-drawings'}>Paintings and Drawings</NavLink>
        <NavLink
          className={styleSelectedMenuItem('print')}
          onClick={() => {
            selectMenuItem('print')
          }}
          to={'art/print'}>Print Making</NavLink>
        <NavLink
          className={styleSelectedMenuItem('fiber')}
          onClick={() => {
            selectMenuItem('fiber')
          }}
          to={'art/fiber'}>Fiber Art</NavLink>
        <NavLink
          className={styleSelectedMenuItem('developmental')}
          onClick={() => {
            selectMenuItem('developmental')
          }}
          to={'art/developmental'}>Developmental Art</NavLink>
        <NavLink
          className={styleSelectedMenuItem('about-the-site')}
          onClick={() => {
            selectMenuItem('about-the-site')
          }}
          to={'art/about-the-site'}>About the Site</NavLink>
      </nav>
      {showHambergerMenu()}
    </div>
  )
}

export default Banner