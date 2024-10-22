import React from 'react'
import Header from './Header.js'
import GetConnected from "../Home/GetConnected.js";
import MainContent from './MainContent.js';

const Projects = () => {
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

export default Projects
