import { useNavigate } from "react-router-dom";

export default function ReceptionistDashboard() {
  const nav = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Receptionist Dashboard</h2>

      <button
        className="btn btn-primary"
        onClick={() => nav("/queue")}
      >
        View Queue
      </button>
    </div>
  );
}