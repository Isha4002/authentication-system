import {
  FaShieldAlt,
  FaHome,
  FaUser,
  FaCog,
  FaLock,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <FaShieldAlt className="sidebar-logo-icon" />
        <span>AuthSystem</span>
      </div>

      <div className="sidebar-menu">

        <p className="menu-title">MAIN</p>

        <Link to="/dashboard" className="sidebar-link">
          <div
            className={`menu-item ${
              location.pathname === "/dashboard" ? "active" : ""
            }`}
          >
            <FaHome />
            <span>Dashboard</span>
          </div>
        </Link>

        <Link to="/profile" className="sidebar-link">
          <div
            className={`menu-item ${
              location.pathname === "/profile" ? "active" : ""
            }`}
          >
            <FaUser />
            <span>Profile</span>
          </div>
        </Link>

        <Link to="/settings" className="sidebar-link">
          <div className="menu-item">
            <FaCog />
            <span>Settings</span>
          </div>
        </Link>

      </div>

      <div className="sidebar-menu">

        <p className="menu-title">USER</p>

       <Link to="/change-password" className="sidebar-link">
  <div
    className={`menu-item ${
      location.pathname === "/change-password"
        ? "active"
        : ""
    }`}
  >
    <FaLock />
    <span>Change Password</span>
  </div>
</Link>

        <div className="menu-item">
          <FaHistory />
          <span>Sessions</span>
        </div>

        <div className="menu-item logout" onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;