import {
  useParams,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";

import API from "../../api/axios";

import {
  FaArrowLeft,
  FaFileMedical,
  FaNotesMedical,
} from "react-icons/fa";

export default function AddReport() {
  const { id } = useParams();

  const nav = useNavigate();

  const [report, setReport] = useState("");

  const submit = async () => {
    await API.post(`/reports/${id}`, {
      report,
    });

    alert("Report Added");

    nav("/doctor-queue");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px 20px",
      }}
    >
      {/* TOP SECTION */}
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
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.2)",
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
            Add Report
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Create medical report for patient
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "750px",
          background:
            "linear-gradient(145deg,#111827,#1e293b)",
          border:
            "1px solid rgba(255,255,255,0.05)",
          borderRadius: "24px",
          padding: "40px",
          boxShadow:
            "0 12px 35px rgba(0,0,0,0.28)",
        }}
      >
        {/* HEADER */}
        <div className="text-center mb-5">
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "24px",
              background:
                "rgba(20,184,166,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <FaFileMedical
              size={42}
              color="#14b8a6"
            />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Patient Medical Report
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Add diagnosis, observations and
            recommendations
          </p>
        </div>

        {/* REPORT FIELD */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "12px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Report Details
          </label>

          <div className="position-relative">
            {/* Icon */}
            <FaNotesMedical
              style={{
                position: "absolute",
                top: "20px",
                left: "18px",
                color: "#64748b",
                fontSize: "18px",
              }}
            />

            {/* Textarea */}
            <textarea
              rows="7"
              className="form-control"
              placeholder="Enter medical report..."
              onChange={(e) =>
                setReport(e.target.value)
              }
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding: "18px 18px 18px 50px",
                borderRadius: "16px",
                resize: "none",
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          className="btn w-100"
          onClick={submit}
          style={{
            background:
              "linear-gradient(135deg,#14b8a6,#0ea5e9)",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "14px",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "10px",
            boxShadow:
              "0 10px 25px rgba(20,184,166,0.25)",
          }}
        >
          Submit Report
        </button>
      </div>
    </div>
  );
}