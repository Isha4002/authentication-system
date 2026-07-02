import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import API from "../services/api";

import {
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const token = localStorage.getItem("token");

      const res = await API.put(
        "/auth/change-password",
        {
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (err) {
      alert(
        err.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <div className="change-password-card">

          <h2>Change Password</h2>

          <p>
            Update your account password securely.
          </p>

          <form onSubmit={handleSubmit}>

            {/* Old Password */}

            <label>Current Password</label>

            <div className="password-field">

              <FaLock />

              <input
                type={showOld ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Current Password"
              />

              <span onClick={() => setShowOld(!showOld)}>
                {showOld ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            {/* New */}

            <label>New Password</label>

            <div className="password-field">

              <FaLock />

              <input
                type={showNew ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
              />

              <span onClick={() => setShowNew(!showNew)}>
                {showNew ? <FaEyeSlash /> : <FaEye />}
              </span>

            </div>

            {/* Confirm */}

            <label>Confirm Password</label>

            <div className="password-field">

              <FaLock />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />

              <span
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </span>

            </div>

            <button className="update-btn">

              Update Password

            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ChangePassword;