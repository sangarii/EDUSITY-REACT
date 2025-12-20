import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../asset/logo.png";
import { Link } from "react-scroll";
import menu_icon from "../../asset/menu-icon.png";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="logo" className="logo" />

      {/* Desktop + Mobile Menu */}
      <ul className={`nav-items ${menuOpen ? "active" : ""}`}>
        <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        <li>
          <Link
            to="hero"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth
            offset={-150}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className="btn dark-btn"
            to="contact"
            smooth
            offset={-260}
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact us
          </Link>
        </li>
      </ul>

      {/* Menu Icon */}
      <img
        src={menu_icon}
        alt="menu"
        className="menu-logo"
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </nav>
  );
};

export default Navbar;
