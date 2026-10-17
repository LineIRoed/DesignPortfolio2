import { Link, useLocation } from "react-router-dom";
import "./footer.css";

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";
  return (
    <footer className="footer">
        <nav className="footer-links" aria-label="footer navigation">
            <div className="footer-links-left">
                <a
                    href="https://www.linkedin.com/in/annalineinderhaugroeed"
                    className="socials-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    LinkedIn
                </a>

                <a
                    href="https://www.instagram.com/annalinered/"
                    className="socials-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Instagram
                </a>
            </div>
            <div className="footer-links-right">
                {!isHome && (
                <Link to="/" className="back-link">Back to main page</Link>
            )}
            </div>
        </nav>
    </footer>
  );
}

export default Footer;
