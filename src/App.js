import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";
import { ParseExcel } from "./components/ParseExcel";

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/parse" element={<ParseExcel />} />
      </Routes>

      <div>
        <FooterComp />
      </div>
    </Router>
  );
}

export default App;
