import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function ReportsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await API.get("/reports/my");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Reports</h2>

      {data.length === 0 && <p>No reports available</p>}

      {data.map((r) => (
        <div key={r.id} className="card p-3 mb-2">
          <p><strong>Date:</strong> {r.date}</p>
          <p><strong>Doctor:</strong> {r.doctorName}</p>
          <p><strong>Report:</strong> {r.report}</p>
        </div>
      ))}
    </div>
  );
}