import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

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

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="container">

      <div className="card">

        <h1>Dashboard</h1>

        <h2>Welcome {user.name}</h2>

        <p>{user.email}</p>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </div>

  );
}

export default Dashboard;