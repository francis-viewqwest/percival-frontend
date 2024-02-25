import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Navbar from "./components/navbar/Navbar";
import Services from "./pages/Services";

function App() {
  document.body.classList.add("lg:overflow-hidden");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
