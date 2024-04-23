import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage";
import Projects from "./Components/ProjectsMobile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  );
}

export default App;
