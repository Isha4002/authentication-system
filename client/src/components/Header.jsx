import { useEffect, useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";

function Header() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="dashboard-header">

      <div>
        <h1>Dashboard</h1>
        <p>Welcome back, {user.name} 👋</p>
      </div>

      <div className="header-right">

        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
          />
        </div>

        <div className="notification">
          <FaBell />
          <span className="notification-dot"></span>
        </div>

        <div className="profile-mini">

          <div className="avatar">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <div>

            <h4>{user.name}</h4>

            <span>{user.email}</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;