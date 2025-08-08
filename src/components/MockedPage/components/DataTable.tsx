const DataTable = () => (
  <div className="data-table">
    <h3 style={{ margin: "0 0 20px 0", color: "#2c3e50" }}>Recent Activity</h3>
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ borderBottom: "2px solid #ecf0f1" }}>
          <th style={{ textAlign: "left", padding: "12px", color: "#7f8c8d" }}>
            User
          </th>
          <th style={{ textAlign: "left", padding: "12px", color: "#7f8c8d" }}>
            Action
          </th>
          <th style={{ textAlign: "left", padding: "12px", color: "#7f8c8d" }}>
            Time
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: "1px solid #ecf0f1" }}>
          <td style={{ padding: "12px" }}>John Doe</td>
          <td style={{ padding: "12px" }}>Created new project</td>
          <td style={{ padding: "12px", color: "#7f8c8d" }}>2 minutes ago</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ecf0f1" }}>
          <td style={{ padding: "12px" }}>Jane Smith</td>
          <td style={{ padding: "12px" }}>Updated settings</td>
          <td style={{ padding: "12px", color: "#7f8c8d" }}>5 minutes ago</td>
        </tr>
        <tr>
          <td style={{ padding: "12px" }}>Bob Johnson</td>
          <td style={{ padding: "12px" }}>Deleted file</td>
          <td style={{ padding: "12px", color: "#7f8c8d" }}>10 minutes ago</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default DataTable;
