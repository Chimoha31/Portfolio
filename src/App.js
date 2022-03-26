import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Introduce from "./components/AboutMe/Introduce";
import AboutMe from './components/AboutMe/AboutMe';
import AnimationTitle from './components/Home/AnimationTitle';

function App() {
  return (
    <div>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<AnimationTitle />}>Home</Route>
          <Route path="/aboutme" element={<AboutMe />}>About Me</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
