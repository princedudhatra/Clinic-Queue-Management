import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const nav = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <button
        className="btn btn-primary m-2"
        onClick={() => nav("/clinic")}
      >
        Clinic Info
      </button>

      <button
        className="btn btn-success m-2"
        onClick={() => nav("/users")}
      >
        Users
      </button>

      <button
        className="btn btn-warning m-2"
        onClick={() => nav("/create-user")}
      >
        Create User
      </button>
    </div>
  );
}