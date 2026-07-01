import {
  FaShieldAlt,
  FaHome,
  FaUser,
  FaCog,
  FaLock,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <FaShieldAlt className="sidebar-logo-icon"/>

        <span>AuthSystem</span>

      </div>

      <div className="sidebar-menu">

        <p className="menu-title">MAIN</p>

        <div className="menu-item active">

          <FaHome />

          <span>Dashboard</span>

        </div>

        <div className="menu-item">

          <FaUser />

          <span>Profile</span>

        </div>

        <div className="menu-item">

          <FaCog />

          <span>Settings</span>

        </div>

      </div>

      <div className="sidebar-menu">

        <p className="menu-title">USER</p>

        <div className="menu-item">

          <FaLock />

          <span>Security</span>

        </div>

        <div className="menu-item">

          <FaHistory />

          <span>Sessions</span>

        </div>

        <div className="menu-item logout">

          <FaSignOutAlt />

          <span>Logout</span>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;