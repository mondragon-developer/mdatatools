//import profmondragon from './profmondragon.jpg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  } from "react-router-dom";
import Home from "./Home";
import Sta from "./Sta";
import Alg from "./Alg";

function App() {
  return (
    <div class="content">
      <header> 
      <h1>Data Science Tools   </h1>
      </header>
      
    <Router>
      <nav>
        <ul>
          <li> <Link to = "/">Home</Link></li>
          <li> <Link to = "/sta">Statistic</Link></li>
          <li> <Link to = "/alg">Algebra</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path = "/alg" element={<Alg />}>
          
        </Route>
        <Route path = "/sta" element={<Sta />}>
        
        </Route>
        <Route path = "/" element={<Home />}>
          
        </Route>
      </Routes>
    </Router>
        
      <h2>About Data Science Tools</h2>  
      <p>
        I do not own, have rights or do maintenance on any of these websites, this is just a webpage that consolidates all the links from different webpages.
      </p>
      <p>
        There is no responsability for the use or missuse of any of these resources.
      </p>

      
      <footer>
      <img src="profmondragon.jpg" alt="Profile picture" className="footer-image" ></img>
        &copy; Copyright 2024 Msc Jose R Mondragon
      </footer>
      </div>
    
  );
}

export default App;
