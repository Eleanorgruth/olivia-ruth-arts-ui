import React from "react";
import olivia from "../assets/olivia.png"
import './Home.css'

const Home = () => {
  return (
    <div className="homepage">
      <img
        className="oliviaPhoto"
        src={olivia}
        alt="Olivia blowing glass"
      />
      <p className="aboutOlivia">
        Olivia is a student at Centre College in Danville Kentucky, studying studio arts and gender studies. She has always used art as a tool to investigate her surroundings and make sense of her experience in the world. She grew up in the beautiful Colorado Springs, Colorado and left her hometown to experience something different from what she knew, as well as play field hockey in a d3 setting.
        <br/>
        <br/>
        Much of Olivia's art examines ideas around norms, fitting in, entropy, and femininity. At Centre she has learned skills involving glass art and fallen in love with the majesty and mesmerizing nature of molten glass. Olivia is working to challenge herself and her art conceptually and technically through the rest of her degree, as well as hopefully continue her arts education with a Master of Fine Arts after graduating from Centre College.
      </p>
    </div>
  )
}

export default Home