import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notes from "./pages/Notes";

export default function App() {

  return(
    <Router>

      <nav>
        <Link to="/" >Home</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/about">About</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/about" element={< About />} />
        </Routes>
      </div>

    </Router>
  );
  
}

