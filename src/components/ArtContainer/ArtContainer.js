import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ArtContainer.css'

const ArtContainer = ({ art }) => {
  const { type } = useParams()
  const [filteredArt, setFilteredArt] = useState([])

  useEffect(()=> {
    const filterArt = art.filter((artPiece)=> {
      return artPiece.type === type
    })
    setFilteredArt(filterArt)
    }, [type])
    
    const artDisplay = filteredArt.map(artPiece => {
      return (
        <section key={artPiece.id}>
        <h3>{artPiece.title}</h3>
        <img src={`https://drive.google.com/uc?export=view&id=${artPiece.url}`} alt={artPiece.title}/>
        <p>{artPiece.description}</p>
      </section>
    )
  })
 
  return (
    <div>
      <h1>{type}</h1>
      {artDisplay}
    </div>
  )
}

export default ArtContainer