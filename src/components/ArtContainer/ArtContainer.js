import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ArtContainer.css'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const ArtContainer = ({ art }) => {
  const { type } = useParams()
  const [filteredArt, setFilteredArt] = useState([])

  useEffect(() => {
    const filterArt = art.filter((artPiece) => {
      return artPiece.type === type
    })
    setFilteredArt(filterArt)
  }, [type])

  const artDisplay = filteredArt.map(artPiece => {
    return (
      <section key={artPiece.id}>
        <Zoom>
          <img src={`https://drive.google.com/uc?export=view&id=${artPiece.url}`} alt={artPiece.title} />
        </Zoom>
        <div className="artInfo">
          <h3>{artPiece.title}</h3>
          <p>Medium: {artPiece.medium}</p>
          <p>{artPiece.date}</p>
          <p>Dimensions: {artPiece.dimension}</p>
          <p>{artPiece.description}</p>
        </div>
      </section>
    )
  })

  return (
    <div>
      {artDisplay}
    </div>
  )
}

export default ArtContainer