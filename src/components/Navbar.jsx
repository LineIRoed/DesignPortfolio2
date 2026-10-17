import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="/" className="logo">
          LineRed Design
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
