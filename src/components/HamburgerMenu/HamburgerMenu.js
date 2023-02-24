import React, { useState } from "react"
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HamburgerMenu = ({setSelectedItem}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const showHambergerMenu = () => {
    if (!hamburgerOpen) {
      return (<FontAwesomeIcon
        className={"hamburger"}
        icon={faBars}
        onClick={() => {
          setSelectedItem(null)
        }} />)
    } else {
      return <FontAwesomeIcon
        className={"close"}
        icon={faX}
        onClick={() => {
          setSelectedItem(null)
        }} />
    }
  }

  return ( <div>
    {showHambergerMenu()}

  </div>
  )
}

export default HamburgerMenu