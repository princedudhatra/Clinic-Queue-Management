import { useEffect, useState } from "react";

import API from "../../api/axios";

import {
  FaArrowLeft,
  FaFileMedical,
  FaCalendarAlt,
  FaUserMd,
  FaNotesMedical,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function ReportsList() {
  const [data, setData] =
    useState([]);

  const nav = useNavigate();

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await API.get(
        "/reports/my"
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

        {/* PAGE TITLE */}
        <div className="text-end">
          <h2
            style={{
              color: "#fff",
              fontWeight: "700",
              marginBottom: "5px",
            }}
          >
            My Reports
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            View your medical reports
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
            Medical Reports
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Access your healthcare
            reports and diagnosis
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
              No reports available
            </h5>
          </div>
        )}

        {/* REPORT LIST */}
        <div className="row">
          {data.map((r) => (
            <div
              key={r.id}
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
                    Medical Report
                  </h4>

                  <span
                    style={{
                      background:
                        "rgba(20,184,166,0.15)",

                      color: "#14b8a6",

                      padding:
                        "7px 16px",

                      borderRadius:
                        "30px",

                      fontSize: "13px",

                      fontWeight: "600",
                    }}
                  >
                    Available
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
                      {r.date}
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
                      {r.doctorName}
                    </span>
                  </div>
                </div>

                {/* REPORT */}
                <div>
                  <p
                    style={{
                      color: "#94a3b8",
                      marginBottom:
                        "8px",
                    }}
                  >
                    Report Details
                  </p>

                  <div className="d-flex">
                    <FaNotesMedical
                      color="#f59e0b"
                      className="me-2 mt-1"
                    />

                    <p
                      style={{
                        color: "#e2e8f0",
                        margin: 0,
                        lineHeight:
                          "1.8",
                      }}
                    >
                      {r.report}
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