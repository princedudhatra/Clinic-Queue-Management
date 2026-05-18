import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUserPlus,
  FaUser,
  FaEnvelope,
  FaLock,
  FaUserShield,
} from "react-icons/fa";

export default function CreateUser() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    try {
      const res = await API.post("/admin/users", {
        name,
        email,
        password,
        role,
        clinicId: 304,
      });

      console.log(res.data);

      alert("User Created");

      nav("/users");
    } catch (err) {
      console.log("ERROR:", err.response?.data);

      alert("Failed: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px 20px",
      }}
    >
      {/* Top Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Back Button */}
        <button
          onClick={() => nav(-1)}
          className="btn d-flex align-items-center"
          style={{
            background: "#1e293b",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            padding: "10px 18px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <FaArrowLeft className="me-2" />
          Back
        </button>

        {/* Heading */}
        <div className="text-end">
          <h2
            style={{
              color: "#fff",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            Create User
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Add new user to healthcare system
          </p>
        </div>
      </div>

      {/* Main Card */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "700px",
          background: "linear-gradient(145deg,#111827,#1e293b)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.28)",
        }}
      >
        {/* Header */}
        <div className="text-center mb-5">
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "24px",
              background: "rgba(59,130,246,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <FaUserPlus size={40} color="#3b82f6" />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            New User Registration
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Create accounts for doctors, staff and patients
          </p>
        </div>

        {/* FORM */}

        {/* Name */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Full Name
          </label>

          <div className="position-relative">
            <FaUser
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              className="form-control"
              placeholder="Enter full name"
              onChange={(e) => setName(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding: "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Email Address
          </label>

          <div className="position-relative">
            <FaEnvelope
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding: "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* Role */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            User Role
          </label>

          <div className="position-relative">
            <FaUserShield
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <select
              className="form-control"
              onChange={(e) => setRole(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding: "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            >
              <option value="">Select Role</option>

              <option value="doctor">Doctor</option>

              <option value="receptionist">Receptionist</option>

              <option value="patient">Patient</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Password
          </label>

          <div className="position-relative">
            <FaLock
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              style={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding: "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* Create Button */}
        <button
          className="btn w-100"
          onClick={submit}
          style={{
            background: "linear-gradient(135deg,#3b82f6,#14b8a6)",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "14px",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "10px",
            boxShadow: "0 10px 25px rgba(59,130,246,0.25)",
          }}
        >
          Create User
        </button>
      </div>
    </div>
  );
}
