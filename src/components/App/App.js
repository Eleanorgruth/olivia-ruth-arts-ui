import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home'
import ArtContainer from '../ArtContainer/ArtContainer';
import AboutSite from '../AboutSite/AboutSite';
import Banner from '../Banner/Banner';
import Error from '../Error/Error'
import { ArtProvider } from '../ArtContext';

const App = () => {
    return (
      <ArtProvider>
      <main className='app'>
        <Banner />
        <Routes>
          <Route
            path="/"
            element={<Home />}
            />
          <Route
            path="art/:type"
            element={<ArtContainer />}
            />
          <Route
            path="/about"
            element={<AboutSite />}
            />
        <Route
            path="*"
            element={<Error/>}
            />
        </Routes>
      </main>
      </ArtProvider>
    )
}
export default App;
