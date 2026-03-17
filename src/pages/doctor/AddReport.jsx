import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../api/axios";

export default function AddReport() {
  const { id } = useParams();
  const nav = useNavigate();
  const [report, setReport] = useState("");

  const submit = async () => {
    await API.post(`/reports/${id}`, { report });

    alert("Report Added");
    nav("/doctor-queue");
  };

  return (
    <div className="container mt-4">
      <h2>Add Report</h2>

      <input
        className="form-control mb-2"
        placeholder="Report"
        onChange={(e) => setReport(e.target.value)}
      />

      <button className="btn btn-primary" onClick={submit}>
        Submit
      </button>
    </div>
  );
}