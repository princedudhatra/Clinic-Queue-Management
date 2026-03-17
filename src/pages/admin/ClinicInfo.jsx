import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function ClinicInfo() {
  const [clinic, setClinic] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    fetchClinic();
  }, []);

  const fetchClinic = async () => {
    try {
      const res = await API.get("/admin/clinic");
      setClinic(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Clinic Information</h2>

      <div className="card p-3">
        <p><strong>Name:</strong> {clinic.name}</p>
        <p><strong>Address:</strong> {clinic.address}</p>
        <p><strong>Phone:</strong> {clinic.phone}</p>
        <p><strong>Email:</strong> {clinic.email}</p>
      </div>
    </div>
  );
}