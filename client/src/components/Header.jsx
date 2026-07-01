import { FaBell, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="dashboard-header">

      <div>

        <h1>Dashboard</h1>

        <p>
          Welcome back! Manage your authentication system.
        </p>

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

          <img
            src="https://ui-avatars.com/api/?name=User&background=7c3aed&color=fff"
            alt="avatar"
          />

          <div>

            <h4>User</h4>

            <span>Authenticated</span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Header;