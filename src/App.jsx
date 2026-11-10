import "./App.css";
import { Routes, Route, NavLink, Link } from "react-router";
import { LuCaravan } from "react-icons/lu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Destinations from "./components/Destinations";
import Destination from "./components/Destination";

function App() {
  return (
    <>
      <header>
        <nav>
          <Link className="link icon-home" to="/">
            <div className="icon-container">
              <LuCaravan id="icon" />
            </div>
          </Link>
          <div>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link nav-btn active" : "link nav-btn"
              }
              to="/destinations"
            >
              Destinations
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link nav-btn active" : "link nav-btn"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link nav-btn active" : "link nav-btn"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "link nav-btn active" : "link nav-btn"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destinations" element={<Destinations />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/destinations/:id" element={<Destination />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
