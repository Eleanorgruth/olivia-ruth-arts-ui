import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Art.css'

const Art = ({ art }) => {
  const { id } = useParams()
  const [artImage, selectArtImage] = useState({})


  useEffect(() => {
    const selectedArtImage = art.find((artPiece) => {
      return Number(artPiece.id) === Number(id)
    })
    selectArtImage(selectedArtImage)
  }, [id])

  return(
    <section className="artSection">
      <img 
        className="artImage"
        src={`https://drive.google.com/uc?export=view&id=${artImage.url}`}
        alt={`Image of "${artImage.title}" a ${artImage.type} art piece by Olivia Ruth`}
      />
    </section>
  )
}

export default Art