import { useEffect, useState } from "react";

import API from "../../api/axios";

import {
  FaArrowLeft,
  FaFilePrescription,
  FaUserMd,
  FaPills,
  FaNotesMedical,
  FaCalendarAlt,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function PrescriptionList() {
  const [data, setData] =
    useState([]);

  const nav = useNavigate();

  useEffect(() => {
    fetchPrescriptions();
  }, []);

  const fetchPrescriptions =
    async () => {
      try {
        const res = await API.get(
          "/prescriptions/my"
        );

        setData(res.data);
      } catch (err) {
        console.error(err);
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
            My Prescriptions
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            View your medical
            prescriptions
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1200px",
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
            <FaFilePrescription
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
            Prescription Records
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Track medicines and
            treatment notes
          </p>
        </div>

        {/* EMPTY STATE */}
        {data.length === 0 && (
          <div className="text-center py-5">
            <h5
              style={{
                color: "#94a3b8",
              }}
            >
              No prescriptions found
            </h5>
          </div>
        )}

        {/* PRESCRIPTION LIST */}
        <div className="row">
          {data.map((p) => (
            <div
              key={p.id}
              className="col-lg-6 mb-4"
            >
              <div
                style={{
                  background: "#0f172a",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "24px",
                  height: "100%",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.2)",
                }}
              >
                {/* TOP */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    Prescription
                  </h4>

                  <span
                    style={{
                      background:
                        "rgba(59,130,246,0.15)",

                      color: "#60a5fa",

                      padding:
                        "7px 16px",

                      borderRadius:
                        "30px",

                      fontSize: "13px",

                      fontWeight: "600",
                    }}
                  >
                    Active
                  </span>
                </div>

                {/* DATE */}
                <div className="mb-4">
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Date
                  </p>

                  <div className="d-flex align-items-center">
                    <FaCalendarAlt
                      color="#3b82f6"
                      className="me-2"
                    />

                    <span
                      style={{
                        color: "#fff",
                      }}
                    >
                      {p.date}
                    </span>
                  </div>
                </div>

                {/* DOCTOR */}
                <div className="mb-4">
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Doctor
                  </p>

                  <div className="d-flex align-items-center">
                    <FaUserMd
                      color="#14b8a6"
                      className="me-2"
                    />

                    <span
                      style={{
                        color: "#fff",
                      }}
                    >
                      {p.doctorName}
                    </span>
                  </div>
                </div>

                {/* MEDICINES */}
                <div className="mb-4">
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Medicines
                  </p>

                  <div className="d-flex">
                    <FaPills
                      color="#f59e0b"
                      className="me-2 mt-1"
                    />

                    <p
                      style={{
                        color: "#e2e8f0",
                        margin: 0,
                        lineHeight:
                          "1.7",
                      }}
                    >
                      {p.medicines}
                    </p>
                  </div>
                </div>

                {/* NOTES */}
                <div>
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Notes
                  </p>

                  <div className="d-flex">
                    <FaNotesMedical
                      color="#ef4444"
                      className="me-2 mt-1"
                    />

                    <p
                      style={{
                        color: "#e2e8f0",
                        margin: 0,
                        lineHeight:
                          "1.7",
                      }}
                    >
                      {p.notes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}