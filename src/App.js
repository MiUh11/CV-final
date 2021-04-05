import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
      <a className="scroll-btn" href="#">
        <i class="fas fa-arrow-up"></i>
      </a>
      <Footer />
    </div>
  );
}

export default App;
