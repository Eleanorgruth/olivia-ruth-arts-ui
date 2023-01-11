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
        path="/"
        element={
          <Home />
        }
      />
      <Route
        path="/test"
        element={
          <ArtContainer />
        }
      />
      <Route
        path="/about-the-site"
        element={
          <AboutSite />
        }
      />

    </Routes>
  )
}

export default App;
