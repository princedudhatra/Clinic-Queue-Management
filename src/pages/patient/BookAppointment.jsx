import { useState } from "react";
import API from "../../api/axios";

export default function BookAppointment() {
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const submit = async () => {
    try {
      const res = await API.post("/appointments", {
        appointmentDate: date,
        timeSlot: timeSlot,
      });

      console.log(res.data);
      alert("Appointment Booked Successfully");

      window.location.href = "/patient";

    } catch (err) {
      console.log("ERROR:", err.response?.data);
      alert("Failed: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book Appointment</h2>

      {/* Date */}
      <input
        type="date"
        className="form-control mb-2"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Time Slot */}
      <input
        className="form-control mb-2"
        placeholder="Enter Time Slot (e.g. 10:00-10:15)"
        onChange={(e) => setTimeSlot(e.target.value)}
      />

      <button className="btn btn-primary" onClick={submit}>
        Book
      </button>
    </div>
  );
}