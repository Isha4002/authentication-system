import { Link } from "react-router-dom";
import { FaShieldAlt } from "react-icons/fa";

function Landing() {
  return (
    <div className="landing-page">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          <FaShieldAlt className="logo-icon" />
          <span>AuthSystem</span>
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="login-btn">
              Log In
            </button>
          </Link>

          <Link to="/register">
            <button className="signup-btn">
              Sign Up
            </button>
          </Link>

        </div>

      </nav>

    </div>
  );
}

export default Landing;