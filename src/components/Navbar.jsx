export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <span className="logo">SA</span>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Hire Me</a>

        {/* onClick calls the toggle function passed down from App.jsx */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
