import React, {useEffect, useParams, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home'
import ArtContainer from '../ArtContainer/ArtContainer';
import AboutSite from '../AboutSite/AboutSite';
import Banner from '../Banner/Banner';
import getData from "../../apiCalls";

const App = () => {
const [art, setArt] = useState([])

  useEffect(()=> {
    getData('http://localhost:3001/art').then(data => {
      setArt(data)})
    }, [])

  return (
    <main>
      <Banner />
      <Routes>
        <Route
          exact path="/"
          element={
            <Home />
          }
        />
        <Route
          exact path="/:type"
          element={
            <ArtContainer art={art}/>
          }
        />
        <Route
          exact path="/about-the-site"
          element={
            <AboutSite />
          }
        />

      </Routes>
      </main>
      )
}

      export default App;
