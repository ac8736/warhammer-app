import "./App.css";
import { Navbar } from "./components/index";
import { Home, Armory } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armory" element={<Armory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
