// Type definitions
interface DashboardCardProps {
  title: string;
  value: string | number;
  icon: string;
  color: string;
}

// Dashboard Components
const DashboardCard = ({ title, value, icon, color }: DashboardCardProps) => (
  <div
    className="dashboard-card"
    style={{
      border: `2px solid ${color}`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0, color: "#2c3e50" }}>{title}</h3>
      <span style={{ fontSize: "24px" }}>{icon}</span>
    </div>
    <div style={{ fontSize: "32px", fontWeight: "bold", color }}>{value}</div>
  </div>
);

export default DashboardCard;
