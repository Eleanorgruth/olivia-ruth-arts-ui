import React from "react";
import eleanorAndOlivia from "../assets/eleanorAndOlivia.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './AboutSite.css'

const AboutSite = () => {
  return (
    <div className="aboutSiteInfo">
      <img
        className="eleanorAndOliviaImage"
        src={eleanorAndOlivia}
        alt="Eleanor and Olivia"
      />
      <p
        className="aboutSiteDescription">
        Olivia's sister, Eleanor Ruth, created this site for her final solo project at the Turing School of Software and Design. Please reach out to Eleanor with any feedback, suggestions, or questions. 
      </p>
      <div className="contactEleanor">   
      <a
        className="linkedIn"
        href="https://www.linkedin.com/in/eleanorgruth/">
        <FontAwesomeIcon className="contact" icon={faLinkedin} />
      </a>
      <a
        className="email"
        href="https://github.com/Eleanorgruth">
        <FontAwesomeIcon className="contact" icon={faSquareGithub} />
      </a>
      <a
        className="email"
        href="mailto: ellie.ruth@me.com">
        <FontAwesomeIcon className="contact" icon={faEnvelope} />
      </a>
      </div>
    </div>
  )
}

export default AboutSite