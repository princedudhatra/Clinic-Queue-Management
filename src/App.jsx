import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";

import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointment from "./pages/patient/BookAppointment";
import MyAppointments from "./pages/patient/MyAppointments";
import AppointmentDetails from "./pages/patient/AppointmentDetails";
import PrescriptionList from "./pages/patient/PrescriptionList";
import ReportsList from "./pages/patient/ReportsList";

import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import DoctorQueue from "./pages/doctor/DoctorQueue";
import AddPrescription from "./pages/doctor/AddPrescription";
import AddReport from "./pages/doctor/AddReport";

import ReceptionistDashboard from "./pages/receptionist/ReceptionistDashboard";
import Queue from "./pages/receptionist/Queue";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ClinicInfo from "./pages/admin/ClinicInfo";
import UsersList from "./pages/admin/UsersList";
import CreateUser from "./pages/admin/CreateUser";

function App() {
  const role = localStorage.getItem("role");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {role === "patient" && (
          <>
            <Route path="/dashboard" element={<PatientDashboard />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/appointments" element={<MyAppointments />} />
            <Route path="/appointments/:id" element={<AppointmentDetails />} />
            <Route path="/prescriptions" element={<PrescriptionList />} />
            <Route path="/reports" element={<ReportsList />} />
          </>
        )}

        {role === "doctor" && (
          <>
            <Route path="/dashboard" element={<DoctorDashboard />} />
            <Route path="/doctor-queue" element={<DoctorQueue />} />
            <Route path="/add-prescription/:id" element={<AddPrescription />} />
            <Route path="/add-report/:id" element={<AddReport />} />
          </>
        )}

        {role === "receptionist" && (
          <>
            <Route path="/dashboard" element={<ReceptionistDashboard />} />
            <Route path="/queue" element={<Queue />} />
          </>
        )}

        {role === "admin" && (
          <>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/clinic" element={<ClinicInfo />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/create-user" element={<CreateUser />} />
          </>
        )}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;