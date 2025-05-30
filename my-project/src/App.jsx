import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Analysis from "./pages/Analysis";
import Select from "./pages/Select";
import Demographics from "./pages/Demographics";
import Camera from "./pages/Camera";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/testing' element={<Testing />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/select" element={<Select />} />
          <Route path='/demographics' element={<Demographics />} />
          <Route path='/camera' element={<Camera />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
