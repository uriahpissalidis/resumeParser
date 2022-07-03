import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { ParseExcel } from "./components/ParseExcel";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/parse-excel" element={<ParseExcel />}></Route>
    </Routes>
  );
}

export default App;
