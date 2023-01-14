import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home'
import ArtContainer from '../ArtContainer/ArtContainer';
import AboutSite from '../AboutSite/AboutSite';
import Banner from '../Banner/Banner';
import Error from '../Error/Error'

const App = () => {
  // const [error, setError] = useState('')
  // if (error) {
  //   return (
  //     <Error error={error} />
  //   )
  // } else {
    return (
      <main className='app'>
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
              <ArtContainer />
            }
          />
          <Route
            exact path="/about-the-site"
            element={
              <AboutSite />
            }
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </main>
    )
}
export default App;
