import React from "react";
import './Error.css'
import { NavLink } from "react-router-dom"

const Error = () => {
  return(
    <div className="error">
      <h1>Oops, something went wrong.</h1>
      <NavLink to={'/'} >
        <button>Return Home</button>
      </NavLink>
    </div>
  )
}

export default Error