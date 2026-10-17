
import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="logo" onClick={closeMenu}>
          LineRed Design
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          id="main-nav-links"
          className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
