import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function PrescriptionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions = async () => {
    try {
      const res = await API.get("/prescriptions/my");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Prescriptions</h2>

      {data.length === 0 && <p>No prescriptions found</p>}

      {data.map((p) => (
        <div key={p.id} className="card p-3 mb-2">
          <p><strong>Date:</strong> {p.date}</p>
          <p><strong>Doctor:</strong> {p.doctorName}</p>
          <p><strong>Medicines:</strong> {p.medicines}</p>
          <p><strong>Notes:</strong> {p.notes}</p>
        </div>
      ))}
    </div>
  );
}