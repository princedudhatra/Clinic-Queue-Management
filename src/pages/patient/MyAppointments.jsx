import { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  useNavigate,
} from "react-router-dom";

import {
  FaArrowLeft,
  FaCalendarCheck,
  FaEye,
  FaClock,
} from "react-icons/fa";

export default function MyAppointments() {
  const [data, setData] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    API.get("/appointments/my").then(
      (res) => setData(res.data)
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
        {/* BACK BUTTON */}
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

        {/* HEADING */}
        <div className="text-end">
          <h2
            style={{
              color: "#fff",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            My Appointments
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            View your appointment history
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
            <FaCalendarCheck
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
            Appointment Records
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Manage and track your
            appointments
          </p>
        </div>

        {/* APPOINTMENTS LIST */}
        <div className="row">
          {data.map((d) => (
            <div
              key={d.id}
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
                {/* STATUS */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    Appointment
                  </h4>

                  <span
                    style={{
                      background:
                        d.status ===
                        "approved"
                          ? "rgba(34,197,94,0.15)"
                          : d.status ===
                            "pending"
                          ? "rgba(245,158,11,0.15)"
                          : "rgba(59,130,246,0.15)",

                      color:
                        d.status ===
                        "approved"
                          ? "#22c55e"
                          : d.status ===
                            "pending"
                          ? "#f59e0b"
                          : "#60a5fa",

                      padding:
                        "7px 16px",

                      borderRadius:
                        "30px",

                      fontSize: "13px",

                      fontWeight: "600",

                      textTransform:
                        "capitalize",
                    }}
                  >
                    {d.status}
                  </span>
                </div>

                {/* DATE */}
                <div className="mb-4">
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                      fontSize: "14px",
                    }}
                  >
                    Appointment Date
                  </p>

                  <div className="d-flex align-items-center">
                    <FaClock
                      color="#3b82f6"
                      className="me-2"
                    />

                    <span
                      style={{
                        color: "#fff",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      {d.date}
                    </span>
                  </div>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    nav(
                      `/appointments/${d.id}`
                    )
                  }
                  className="btn w-100 d-flex align-items-center justify-content-center"
                  style={{
                    background:
                      "linear-gradient(135deg,#3b82f6,#14b8a6)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "14px",
                    padding: "12px",
                    fontWeight: "600",
                    boxShadow:
                      "0 8px 20px rgba(59,130,246,0.25)",
                  }}
                >
                  <FaEye className="me-2" />
                  View Details
                </button>
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
              No appointments found
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}