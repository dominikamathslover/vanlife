import "./App.css";
import { Routes, Route, Link } from "react-router";
import { LuCaravan } from "react-icons/lu";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <nav>
        <Link className="link icon-home" to="/">
          <div className="icon-container">
            <LuCaravan id="icon" />
          </div>
        </Link>

        <div>
          <Link className="link nav-btn" to="/about">
            About
          </Link>
          <Link className="link nav-btn" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
