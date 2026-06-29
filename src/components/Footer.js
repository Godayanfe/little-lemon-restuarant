import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div>
          <img src={require("../assets/footer-logo.png")} alt="Little Lemon" className="footer-logo" />
          <p className="footer-tagline">Mediterranean flavors, Chicago heart. A family table open to everyone.</p>
        </div>
        <div>
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href={require("../assets/menu.webp")} target="_blank" rel="noreferrer">Menu</a></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li>2395 Maldove Way</li>
            <li>Chicago, Illinois</li>
            <li style={{marginTop:'8px'}}>(629) 243-6827</li>
            <li><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer-heading">Follow Us</h4>
          <ul className="footer-links">
            <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2024 Little Lemon. All rights reserved.</span>
        <span>Made with 🍋 in Chicago</span>
      </div>
    </footer>
  );
}
