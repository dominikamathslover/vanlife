import "./App.css";
import { Routes, Route, Link } from "react-router";
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
            <Link className="link nav-btn" to="/destinations">
              Destinations
            </Link>
            <Link className="link nav-btn" to="/gallery">
              Gallery
            </Link>
            <Link className="link nav-btn" to="/about">
              About
            </Link>
            <Link className="link nav-btn" to="/contact">
              Contact
            </Link>
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
