import {
  FaLaptop,
  FaMobileAlt,
  FaWindows,
} from "react-icons/fa";

function RecentSessions() {
  const sessions = [
    {
      device: "Chrome on Windows",
      icon: <FaWindows />,
      location: "Noida, India",
      ip: "192.168.1.12",
      time: "2 min ago",
      status: "Active",
    },
    {
      device: "Android Mobile",
      icon: <FaMobileAlt />,
      location: "Delhi, India",
      ip: "192.168.1.14",
      time: "Yesterday",
      status: "Logged Out",
    },
    {
      device: "Laptop Chrome",
      icon: <FaLaptop />,
      location: "Mumbai, India",
      ip: "192.168.1.15",
      time: "2 Days Ago",
      status: "Logged Out",
    },
  ];

  return (
    <div className="session-card">

      <div className="table-header">

        <h2>Recent Sessions</h2>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Device</th>

            <th>Location</th>

            <th>IP Address</th>

            <th>Last Login</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {sessions.map((item, index) => (

            <tr key={index}>

              <td className="device-cell">

                {item.icon}

                {item.device}

              </td>

              <td>{item.location}</td>

              <td>{item.ip}</td>

              <td>{item.time}</td>

              <td>

                <span
                  className={
                    item.status === "Active"
                      ? "status active"
                      : "status inactive"
                  }
                >
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default RecentSessions;