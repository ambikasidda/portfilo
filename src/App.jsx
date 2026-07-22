import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  // 1. Single source of truth for the theme
  const [theme, setTheme] = useState("light");

  // 2. Function that flips the theme — wired to onClick in Navbar
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    // 3. data-theme drives every CSS variable defined in App.css
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <footer className="footer">
        © 2025 Sidda Ambika · AI & ML Engineer · Nandyal, Andhra Pradesh.
      </footer>
    </div>
  );
}

export default App;
