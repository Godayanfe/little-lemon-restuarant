import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <Link to="/">
          <img src={require("../assets/nav-logo.png")} alt="Little Lemon" className="nav-logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href={require("../assets/menu.webp")} target="_blank" rel="noreferrer">Menu</a>
          <Link to="/order">Order Online</Link>
          <Link to="/reservations" className="btn-primary nav-reserve">Reserve a Table</Link>
        </div>

        <button className="burger-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <a href={require("../assets/menu.webp")} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Menu</a>
        <Link to="/order" onClick={() => setOpen(false)}>Order Online</Link>
        <Link to="/reservations" onClick={() => setOpen(false)}>Reservations</Link>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
      </div>
    </>
  );
}
