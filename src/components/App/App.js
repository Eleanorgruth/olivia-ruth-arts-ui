import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home'
import ArtContainer from '../ArtContainer/ArtContainer';
import AboutSite from '../AboutSite/AboutSite';

const App = () => {
  return (
    <Routes>
      <Route
        exact path="/"
        element={
          <Home />
        }
      />
      <Route
        exact path="/test"
        element={
          <ArtContainer />
        }
      />
      <Route
        exact path="/about-the-site"
        element={
          <AboutSite />
        }
      />

    </Routes>
  )
}

export default App;
