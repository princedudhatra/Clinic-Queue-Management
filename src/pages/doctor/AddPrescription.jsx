import { useState } from "react";
import API from "../../api/axios";
import { useParams } from "react-router-dom";

export default function AddPrescription() {
  const { id } = useParams(); 

  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");
  const [duration, setDuration] = useState("");
  const [notes, setNotes] = useState("");

  const submit = async () => {
    try {
      const body = {
        medicines: [
          {
            name: name,
            dosage: dosage,
            duration: duration,
          },
        ],
        notes: notes,
      };

      console.log("SENDING:", body);

      const res = await API.post(`/prescriptions/${id}`, body);

      alert("Prescription Added ");

    } catch (err) {
      console.log("ERROR:", err.response?.data);
      alert("Error: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Prescription</h2>

      <input
        className="form-control mb-2"
        placeholder="Medicine Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Dosage (e.g. 500mg)"
        onChange={(e) => setDosage(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Duration (e.g. 5 days)"
        onChange={(e) => setDuration(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
      />

      <button className="btn btn-success" onClick={submit}>
        Submit
      </button>
    </div>
  );
}