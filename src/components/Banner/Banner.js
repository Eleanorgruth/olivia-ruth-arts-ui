import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import './Banner.css'
import logo from "../assets/ojLogo2.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faX } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu"

const Banner = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  // const [hamburgerOpen, setHamburgerOpen] = useState(true)

  //const selectMenuItem = (selection) => {
    //setSelectedItem(selection)
    // if (window.innerWidth < 767) {
    //   setHamburgerOpen(!hamburgerOpen)
    // }
  //}
  const styleSelectedMenuItem = (selected) => {
    if (selectedItem === selected) {
      return 'selected menuItem'
    } else {
      return 'menuItem'
    }
  }
  // const showHambergerMenu = () => {
  //   if (!hamburgerOpen && window.innerWidth < 767) {
  //     return (<FontAwesomeIcon
  //       className={"hamburger"}
  //       icon={faBars}
  //       onClick={() => {
  //         selectMenuItem(null)
  //       }} />)
  //   } else if (hamburgerOpen && window.innerWidth < 767) {
  //     return <FontAwesomeIcon
  //       className={"close"}
  //       icon={faX}
  //       onClick={() => {
  //         selectMenuItem(null)
  //       }} />
  //   }
  // }

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
      {window.innerWidth > 767 ? 
      <nav
        className='navStyling'
      >
        <NavLink
          className={styleSelectedMenuItem('glass')}
          onClick={() => {
            setSelectedItem('glass')
          }}
          to={'art/glass'}>Glass</NavLink>
        <NavLink
          className={styleSelectedMenuItem('paintings')}
          onClick={() => {
            setSelectedItem('paintings')
          }}
          to={'art/paintings'}>Paintings and Drawings</NavLink>
        <NavLink
          className={styleSelectedMenuItem('print')}
          onClick={() => {
            setSelectedItem('print')
          }}
          to={'art/print'}>Print Making</NavLink>
        <NavLink
          className={styleSelectedMenuItem('fiber')}
          onClick={() => {
            setSelectedItem('fiber')
          }}
          to={'art/fiber'}>Fiber Art</NavLink>
        <NavLink
          className={styleSelectedMenuItem('developmental')}
          onClick={() => {
            setSelectedItem('developmental')
          }}
          to={'art/developmental'}>Developmental Art</NavLink>
        <NavLink
          className={styleSelectedMenuItem('about')}
          onClick={() => {
            setSelectedItem('about')
          }}
          to={'/about'}>About the Site</NavLink>
      </nav>
    : <HamburgerMenu setSelectedItem={setSelectedItem}/> }
    {/* {showHambergerMenu()} */}
    </div>
  )
}

export default Banner