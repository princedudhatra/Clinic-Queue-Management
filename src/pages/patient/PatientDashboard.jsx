import { useNavigate } from "react-router-dom";

export default function PatientDashboard() {
  const nav = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Patient Dashboard</h2>
      <button className="btn btn-primary m-2" onClick={() => nav("/book")}>Book Appointment</button>
      <button className="btn btn-success m-2" onClick={() => nav("/appointments")}>My Appointments</button>
      <button className="btn btn-warning m-2" onClick={() => nav("/prescriptions")}>Prescriptions</button>
      <button className="btn btn-info m-2" onClick={() => nav("/reports")}>Reports</button>
    </div>
  );
}