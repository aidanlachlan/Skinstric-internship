import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Testing from "./pages/Testing";
import Analysis from "./pages/Analysis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/testing' element={<Testing />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
