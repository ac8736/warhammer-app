import "./App.css";
import ApiContext from "context/ApiContext";
import { Navbar } from "./components/index";
import { Home, Armory } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ApiContext.Provider value={"localhost:8080/"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/armory" element={<Armory />} />
        </Routes>
      </Router>
    </ApiContext.Provider>
  );
}

export default App;
