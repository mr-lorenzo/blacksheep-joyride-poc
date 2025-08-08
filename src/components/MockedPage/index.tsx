import { Button } from "../../components";
import DashboardCard from "./components/DashboardCard";
import DataTable from "./components/DataTable";

const MockedPage = ({ onStartTour }: { onStartTour: () => void }) => {
  return (
    <>
      <div className="welcome-header">
        <h1>Dashboard POC</h1>
        <p>
          A comprehensive demonstration of react-joyride with custom components
        </p>
        <Button onClick={onStartTour} className="tour-button">
          🚀 Start Tour
        </Button>
      </div>
      <div className="stats-section">
        <div className="user-card">
          <DashboardCard
            title="Active Users"
            value={1247}
            icon="👥"
            color="#3498db"
          />
        </div>
        <div className="project-card">
          <DashboardCard
            title="Active Projects"
            value={89}
            icon="📁"
            color="#e74c3c"
          />
        </div>
        <div className="task-card">
          <DashboardCard
            title="Pending Tasks"
            value={342}
            icon="✅"
            color="#f39c12"
          />
        </div>
        <div id="revenue-card">
          <DashboardCard
            title="Monthly Revenue"
            value={45678}
            icon="💰"
            color="#27ae60"
          />
        </div>
      </div>
      <div className="action-buttons">
        <Button>➕ Add New</Button>
        <Button variant="secondary">📊 Export Data</Button>
      </div>
      <div className="data-table">
        <DataTable />
      </div>
      <div className="about-section">
        <h3>About This POC</h3>
        <p>
          This is a comprehensive proof of concept demonstrating react-joyride
          integration with custom components. The tour includes interactive
          elements, custom styling, and demonstrates best practices for creating
          user onboarding experiences. Click the "Start Tour" button to begin
          the guided tour!
        </p>
      </div>
    </>
  );
};

export default MockedPage;
