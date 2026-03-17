import { useEffect, useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function MyAppointments() {
  const [data, setData] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    API.get("/appointments/my").then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Appointments</h2>

      {data.map((d) => (
        <div key={d.id} className="card p-2 mb-2">
          <p>{d.status} - {d.date}</p>
          <button onClick={() => nav(`/appointments/${d.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}