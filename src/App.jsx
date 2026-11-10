import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Destinations from "./components/Destinations";
import Destination from "./components/Destination";

import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/destinations/:id" element={<Destination />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
