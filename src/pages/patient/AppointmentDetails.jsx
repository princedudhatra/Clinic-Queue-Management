import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

export default function AppointmentDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get(`/appointments/${id}`).then((res) => {
      console.log("DETAILS:", res.data);
      setData(res.data);
    });
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Appointment Details</h2>

      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Date:</strong> {data.appointmentDate}</p>
      <p><strong>Time Slot:</strong> {data.timeSlot}</p>

      <h4>Queue Info</h4>
      <p><strong>Token No:</strong> {data.queueEntry?.tokenNumber}</p>
      <p><strong>Queue Status:</strong> {data.queueEntry?.status}</p>

      <h4>Patient</h4>
      <p>{data.queueEntry?.appointment?.patient?.name}</p>

      <h4>Prescription</h4>
      <p>{data.prescription || "Not available"}</p>

      <h4>Report</h4>
      <p>{data.report || "Not available"}</p>
    </div>
  );
}