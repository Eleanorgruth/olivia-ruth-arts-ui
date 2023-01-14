import React from "react";
import eleanorAndOlivia from "../assets/eleanorAndOlivia.png"
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
    </div>
  )
}

export default AboutSite