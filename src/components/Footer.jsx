import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";
  return (
    <footer className="footer">
        <nav className="footer-links" aria-label="footer navigation">
            <div className="footer-links-left">
                <a 
                    href="#" className="socials-link">LinkedIn
                </a>
                <a 
                    href="#" className="socials-link">Instagram
                </a>
            </div>
            <div className="footer-links-right">
                {!isHome && (
                <Link to="/" className="back-link">Back</Link>
            )}
            </div>
        </nav>
    </footer>
  );
}

export default Footer;
