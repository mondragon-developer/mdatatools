import profImage from "./images/profmondragon.jpg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Sta from "./Sta";
import Alg from "./Alg";
import Test from "./Test";

function App() {
  return (
    <div className="content">
      <header>
        <h1>Data Science Tools </h1>
      </header>

      <Router>
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/sta">Statistics</Link>
            </li>
            <li>
              {" "}
              <Link to="/alg">Algebra</Link>
            </li>
            <li>
              {" "}
              <Link to="/Test">Test</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/alg" element={<Alg />}></Route>
          <Route path="/sta" element={<Sta />}></Route>
          <Route path="/mdatatools" element={<Home />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>

      <h2>About Data Science Tools</h2>
      <p>
        This website consolidates links to various web tools useful for students
        in statistics classes. I do not own, have rights to, or maintain any of
        these sites. Use of these resources is at your own risk, and I am not
        responsible for their use or misuse.
      </p>

      <footer>
        <img
          src={profImage}
          alt="Profile picture"
          className="footer-image"
        ></img>
        &copy; Copyright 2024 Msc Jose R Mondragon
      </footer>
    </div>
  );
}

export default App;
