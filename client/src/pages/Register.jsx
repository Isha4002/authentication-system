import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaMicrosoft,
  FaShieldAlt,
} from "react-icons/fa";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [acceptTerms, setAcceptTerms] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      alert("Please accept Terms & Conditions");
      return;
    }

    setLoading(true);

    try {
      await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      alert("Registration Successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        {/* Top Bar */}

        <div className="auth-header">

          <div className="logo">

            <FaShieldAlt />

            <span>AuthSystem</span>

          </div>

          <p>
            Already have an account?
            <Link to="/"> Log In</Link>
          </p>

        </div>

        <h1>Create Account</h1>

        <p className="subtitle">
          Sign up to get started
        </p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <div className="input-box">

            <FaUser className="input-icon" />

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <label>Email Address</label>

          <div className="input-box">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <label>Password</label>

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

          <label>Confirm Password</label>

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={
                showConfirmPassword ? "text" : "password"
              }
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <span
              className="eye"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          <div className="terms">

            <input
              type="checkbox"
              checked={acceptTerms}
              onChange={() =>
                setAcceptTerms(!acceptTerms)
              }
            />

            <span>
              I agree to the Terms & Conditions
            </span>

          </div>

          <button type="submit">

            {loading
              ? "Creating Account..."
              : "Create Account"}

          </button>

        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-buttons">

          <button type="button">
            <FaGoogle />
          </button>

          <button type="button">
            <FaGithub />
          </button>

          <button type="button">
            <FaMicrosoft />
          </button>

        </div>

      </div>
    </div>
  );
}

export default Register;