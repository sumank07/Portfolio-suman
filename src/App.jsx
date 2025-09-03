import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBtn = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.backgroundColor = isDarkMode ? "black" : "white";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  return (
    <div>
      <Navbar  toggleBtn={toggleBtn} isDarkMode={isDarkMode} />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;