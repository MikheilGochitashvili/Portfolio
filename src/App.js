import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/portfolio" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
