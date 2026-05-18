import { useEffect, useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaUserInjured,
  FaClipboardList,
  FaPrescriptionBottleAlt,
  FaFileMedical,
} from "react-icons/fa";

export default function DoctorQueue() {
  const [data, setData] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    API.get("/doctor/queue").then((res) =>
      setData(res.data)
    );
  }, []);

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
            Today's Queue
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Manage patient consultations
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1100px",
          background:
            "linear-gradient(145deg,#111827,#1e293b)",
          border:
            "1px solid rgba(255,255,255,0.05)",
          borderRadius: "24px",
          padding: "35px",
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
                "rgba(59,130,246,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <FaClipboardList
              size={42}
              color="#3b82f6"
            />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Patient Queue
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            View and manage today's patient
            appointments
          </p>
        </div>

        {/* QUEUE LIST */}
        <div className="row">
          {data.map((item) => (
            <div
              key={item.id}
              className="col-lg-6 mb-4"
            >
              <div
                style={{
                  background: "#0f172a",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.2)",
                  height: "100%",
                }}
              >
                {/* PATIENT INFO */}
                <div className="d-flex align-items-center mb-4">
                  {/* Avatar */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "18px",
                      background:
                        "linear-gradient(135deg,#3b82f6,#14b8a6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "16px",
                    }}
                  >
                    <FaUserInjured
                      size={28}
                      color="#fff"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        marginBottom: "6px",
                        fontWeight: "600",
                      }}
                    >
                      {item.patientName}
                    </h5>

                    <span
                      style={{
                        background:
                          "rgba(59,130,246,0.15)",
                        color: "#60a5fa",
                        padding: "6px 14px",
                        borderRadius: "30px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="d-flex gap-3">
                  {/* Prescription */}
                  <button
                    className="btn flex-grow-1 d-flex align-items-center justify-content-center"
                    onClick={() =>
                      nav(
                        `/add-prescription/${item.id}`
                      )
                    }
                    style={{
                      background:
                        "rgba(245,158,11,0.15)",
                      color: "#f59e0b",
                      border: "none",
                      borderRadius: "14px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <FaPrescriptionBottleAlt className="me-2" />
                    Prescription
                  </button>

                  {/* Report */}
                  <button
                    className="btn flex-grow-1 d-flex align-items-center justify-content-center"
                    onClick={() =>
                      nav(
                        `/add-report/${item.id}`
                      )
                    }
                    style={{
                      background:
                        "rgba(20,184,166,0.15)",
                      color: "#14b8a6",
                      border: "none",
                      borderRadius: "14px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <FaFileMedical className="me-2" />
                    Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {data.length === 0 && (
          <div className="text-center py-5">
            <h5
              style={{
                color: "#94a3b8",
              }}
            >
              No patients in queue today
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}