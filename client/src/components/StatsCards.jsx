import {
  FaUsers,
  FaUserShield,
  FaSignInAlt,
  FaCheckCircle,
} from "react-icons/fa";

function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "248",
      icon: <FaUsers />,
      color: "#6366f1",
    },
    {
      title: "Active Sessions",
      value: "18",
      icon: <FaUserShield />,
      color: "#10b981",
    },
    {
      title: "Logins Today",
      value: "42",
      icon: <FaSignInAlt />,
      color: "#f59e0b",
    },
    {
      title: "Success Rate",
      value: "99.8%",
      icon: <FaCheckCircle />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div
            className="stat-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="stat-info">
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;