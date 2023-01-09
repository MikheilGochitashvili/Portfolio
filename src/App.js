import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectsPage";
import {useNavigate} from "react-router-dom";
import { useState } from "react";
import AboutPage from "./components/AboutPage";

function App() {
  const navigate = useNavigate();
  const [over, setOver] = useState(false)
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/portfolio/projects" element={<ProjectPage />}></Route>
        <Route path="/portfolio" element={<Home over={over} setOver={setOver} navigate={navigate}/>}></Route>
        <Route path="/portfolio/about" element={<AboutPage over={over} setOver={setOver} navigate={navigate} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
