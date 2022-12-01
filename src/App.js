import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/portfolio/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
