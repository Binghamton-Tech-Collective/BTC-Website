import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/About.js";
import Team from "./Components/Team/Team.js";
import Project from "./Components/Projects/Project.js";
import Join from "./Components/Join/Join.js";
import Contact from "./Components/Contact/Contacts.js";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route exact path="/projects" element={<Project />} />
        </Routes>
        <Routes>
          <Route exact path="/teams" element={<Team />} />
        </Routes>
        <Routes>
          <Route exact path="/contacts" element={<Contact />} />
        </Routes>
        <Routes>
          <Route exact path="/join" element={<Join />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
