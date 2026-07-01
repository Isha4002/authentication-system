import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLock,
  FaUser,
  FaSyncAlt,
  FaThLarge,
} from "react-icons/fa";

function Landing() {
  return (
    <div className="landing-page">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          <FaShieldAlt className="logo-icon" />
          <span>AuthSystem</span>
        </div>

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

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-left">

          <div className="hero-badge">
            🔒 Secure. Simple. Scalable.
          </div>

          <h1>
            Authentication
            <br />
            made <span>simple & secure</span>
          </h1>

          <p>
            A full-stack authentication system built using
            React, Express, MongoDB and JWT.
            Secure APIs, protected routes and user management.
          </p>

          <div className="hero-buttons">

            <Link to="/register">
              <button className="signup-btn">
                Get Started
              </button>
            </Link>

            <button className="login-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-right">

    <div className="glow"></div>

    <div className="shield-circle">

        <FaShieldAlt className="big-shield"/>

        <div className="lock-card">

            <FaLock/>

        </div>

        {/* Profile */}

        <div className="profile-card">

            👩

        </div>

        {/* Verification */}

        <div className="verify-card">

            <div className="verify-check">
                ✓
            </div>

            <div className="verify-lines">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>

        {/* Floating Dots */}

        <div className="dot dot1"></div>
        <div className="dot dot2"></div>
        <div className="dot dot3"></div>

    </div>

</div>

      </section>

      {/* Features */}

      <section className="feature-section">

        <div className="feature-card">

          <FaShieldAlt className="feature-icon"/>

          <h3>Secure Authentication</h3>

          <p>Password hashing with bcrypt & JWT.</p>

        </div>

        <div className="feature-card">

          <FaUser className="feature-icon"/>

          <h3>User Management</h3>

          <p>Manage profile and account securely.</p>

        </div>

        <div className="feature-card">

          <FaLock className="feature-icon"/>

          <h3>Protected Routes</h3>

          <p>Frontend & backend authorization.</p>

        </div>

        <div className="feature-card">

          <FaSyncAlt className="feature-icon"/>

          <h3>Token Refresh</h3>

          <p>JWT refresh token support.</p>

        </div>

        <div className="feature-card">

          <FaThLarge className="feature-icon"/>

          <h3>User Dashboard</h3>

          <p>Personal dashboard after login.</p>

        </div>

      </section>

    </div>
  );
}

export default Landing;