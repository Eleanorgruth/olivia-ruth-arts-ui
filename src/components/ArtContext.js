import React, { createContext, useContext, useEffect, useState } from 'react'
import getData from '../apiCalls'
import Error from './Error/Error'

const ArtContext = createContext()

export const useArt = () => {
  return useContext(ArtContext)
}

export const ArtProvider = ({ children }) => {
  const [art, setArt] = useState([])

  useEffect(()=> {
    getData("https://olivia-ruth-arts-api.vercel.app/art")
      .then(data => setArt(data))
      .catch(error => {
        console.log(error)
        return <Error />})
  }, [])

    return (
      <ArtContext.Provider value={art}>
        {children}
      </ArtContext.Provider>
    )
}
