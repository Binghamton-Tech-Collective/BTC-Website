import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Projects from "./Components/Projects/Projects";
import Join from "./Components/Join/Join";
import Contact from "./Components/Contact/Contacts";

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
          <Route exact path="/projects" element={<Projects />} />
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
