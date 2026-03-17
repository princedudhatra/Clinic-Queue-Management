import { useNavigate } from "react-router-dom";

export default function DoctorDashboard() {
  const nav = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Doctor Dashboard</h2>

      <button
        className="btn btn-primary"
        onClick={() => nav("/doctor-queue")}
      >
        View Today's Queue
      </button>
    </div>
  );
}