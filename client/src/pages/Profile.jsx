import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import API from "../services/api";

import {
  FaCamera,
  FaCalendarAlt,
} from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    createdAt: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "Full Stack Developer | MERN Stack Enthusiast",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(res.data.user);

      setFormData({
        name: res.data.user.name,
        email: res.data.user.email,
        bio: "Full Stack Developer | MERN Stack Enthusiast",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
  e.preventDefault();

  try {

    const token = localStorage.getItem("token");

    const res = await API.put(
      "/auth/profile",
      {
        name: formData.name,
        email: formData.email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    localStorage.setItem(
      "user",
      JSON.stringify(res.data.user)
    );

    alert("Profile Updated Successfully");

    fetchProfile();

  } catch (err) {

    alert(
      err.response?.data?.message ||
        "Update Failed"
    );

  }
};

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <div className="profile-container">

          {/* LEFT CARD */}

          <div className="profile-left">

            <div className="profile-image">

              {user.name
                ? user.name.charAt(0).toUpperCase()
                : "U"}

              <button className="camera-btn">

                <FaCamera />

              </button>

            </div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <hr />

            <div className="joined">

              <FaCalendarAlt />

              <span>

                Joined{" "}
                {user.createdAt
                  ? new Date(
                      user.createdAt
                    ).toLocaleDateString()
                  : "-"}

              </span>

            </div>

            <button className="change-photo">

              <FaCamera />

              Change Photo

            </button>

          </div>

          {/* RIGHT */}

          <div className="profile-right">

            <h2>Personal Information</h2>

            <form onSubmit={handleUpdate}>

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Bio</label>

              <textarea
                rows="5"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
              />

              <button
                className="update-btn"
                type="submit"
              >
                Update Profile
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;