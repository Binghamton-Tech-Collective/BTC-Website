import React from 'react'
import Header from './Header.js'
import MainContent from './MainContent.js'
import GetConnected from "./GetConnected.js";

const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <MainContent />
        <GetConnected />
      </div>
    </>
  )
}

export default Home