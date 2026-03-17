import { useEffect, useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function DoctorQueue() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    API.get("/doctor/queue").then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Doctor Queue</h2>

      {data.map((item) => (
        <div key={item.id} className="card p-2 mb-2">
          <p>Patient: {item.patientName}</p>
          <p>Status: {item.status}</p>

          <button
            className="btn btn-warning m-1"
            onClick={() => nav(`/add-prescription/${item.id}`)}
          >
            Add Prescription
          </button>

          <button
            className="btn btn-info m-1"
            onClick={() => nav(`/add-report/${item.id}`)}
          >
            Add Report
          </button>
        </div>
      ))}
    </div>
  );
}