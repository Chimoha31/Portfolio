import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Works from './components/Works_Skills/Works_Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutme" element={<AboutMe />}></Route>
          <Route path="/works_skills" element={<Works />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
