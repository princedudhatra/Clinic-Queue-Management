import { useState } from "react";
import API from "../../api/axios";
import {
  useParams,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaPrescriptionBottleAlt,
  FaPills,
  FaClock,
  FaStickyNote,
} from "react-icons/fa";

export default function AddPrescription() {
  const { id } = useParams();

  const nav = useNavigate();

  const [name, setName] = useState("");

  const [dosage, setDosage] =
    useState("");

  const [duration, setDuration] =
    useState("");

  const [notes, setNotes] =
    useState("");

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

      const res = await API.post(
        `/prescriptions/${id}`,
        body
      );

      alert("Prescription Added ");

      console.log(res.data);
    } catch (err) {
      console.log(
        "ERROR:",
        err.response?.data
      );

      alert(
        "Error: " +
          JSON.stringify(
            err.response?.data
          )
      );
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
            Add Prescription
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Create patient prescription
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
                "rgba(245,158,11,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <FaPrescriptionBottleAlt
              size={42}
              color="#f59e0b"
            />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Patient Prescription
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Add medicines, dosage and
            treatment notes
          </p>
        </div>

        {/* MEDICINE NAME */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Medicine Name
          </label>

          <div className="position-relative">
            <FaPills
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              className="form-control"
              placeholder="Enter medicine name"
              onChange={(e) =>
                setName(e.target.value)
              }
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding:
                  "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* DOSAGE */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Dosage
          </label>

          <div className="position-relative">
            <FaPrescriptionBottleAlt
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              className="form-control"
              placeholder="e.g. 500mg"
              onChange={(e) =>
                setDosage(e.target.value)
              }
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding:
                  "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* DURATION */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Duration
          </label>

          <div className="position-relative">
            <FaClock
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              className="form-control"
              placeholder="e.g. 5 days"
              onChange={(e) =>
                setDuration(
                  e.target.value
                )
              }
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding:
                  "14px 14px 14px 45px",
                borderRadius: "14px",
              }}
            />
          </div>
        </div>

        {/* NOTES */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Notes
          </label>

          <div className="position-relative">
            <FaStickyNote
              style={{
                position: "absolute",
                top: "18px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <textarea
              rows="5"
              className="form-control"
              placeholder="Enter treatment notes..."
              onChange={(e) =>
                setNotes(e.target.value)
              }
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#fff",
                padding:
                  "18px 18px 18px 45px",
                borderRadius: "16px",
                resize: "none",
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
              "linear-gradient(135deg,#f59e0b,#f97316)",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "14px",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "10px",
            boxShadow:
              "0 10px 25px rgba(245,158,11,0.25)",
          }}
        >
          Submit Prescription
        </button>
      </div>
    </div>
  );
}