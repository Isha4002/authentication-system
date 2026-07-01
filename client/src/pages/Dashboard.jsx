import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await API.get("/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data.user);
      } catch (err) {
        navigate("/");
      }
    };

    fetchProfile();
  }, [navigate]);

  const logout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (!confirmLogout) return;

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Dashboard</h1>

        <hr />

        <h2>{user.name}</h2>

        <p>{user.email}</p>

        <p><strong>User ID</strong></p>

        <code>{user._id}</code>

        <br />
        <br />

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;