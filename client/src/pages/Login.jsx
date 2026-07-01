import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    setLoading(true);

    try {
     const res = await API.post("/auth/login", formData);

console.log("LOGIN RESPONSE :", res.data);

localStorage.setItem("token", res.data.token);

localStorage.setItem("user", JSON.stringify(res.data.user));

console.log("USER SAVED :", localStorage.getItem("user"));

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="auth-container">

    <div className="auth-wrapper">

      {/* Top Bar */}

      <div className="auth-topbar">

        <div className="logo">
          <FaShieldAlt className="logo-icon" />
          <span>AuthSystem</span>
        </div>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Sign Up</Link>
        </p>

      </div>

      {/* Login Card */}

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p className="subtitle">
          Login to your account
        </p>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your password"
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

          <div className="remember-row">

            <label className="remember-me">

              <input type="checkbox" />

              Remember Me

            </label>

            <a href="#" className="forgot-link">
              Forgot Password?
            </a>

          </div>

          <button type="submit">

            {loading ? "Signing In..." : "Log In"}

          </button>

        </form>

      </div>

    </div>

  </div>
);
}

export default Login;