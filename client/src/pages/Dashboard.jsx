import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCards from "../components/StatsCards";
import RecentSessions from "../components/RecentSessions";

function Dashboard() {
  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-content">

        <Header />

        <StatsCards />

        <RecentSessions />

      </div>

    </div>
  );
}

export default Dashboard;