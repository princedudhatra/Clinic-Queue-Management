import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import API from "../../api/axios";

import {
  FaArrowLeft,
  FaCalendarCheck,
  FaClock,
  FaUser,
  FaClipboardList,
  FaFilePrescription,
  FaFileMedical,
} from "react-icons/fa";

export default function AppointmentDetails() {
  const { id } = useParams();

  const nav = useNavigate();

  const [data, setData] =
    useState(null);

  useEffect(() => {
    API.get(`/appointments/${id}`).then(
      (res) => {
        console.log(
          "DETAILS:",
          res.data
        );

        setData(res.data);
      }
    );
  }, [id]);

  if (!data)
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f172a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Loading...
      </div>
    );

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
            Appointment Details
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Complete appointment
            information
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
            Appointment Overview
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Detailed healthcare
            appointment record
          </p>
        </div>

        {/* MAIN INFO */}
        <div className="row">
          {/* APPOINTMENT INFO */}
          <div className="col-lg-6 mb-4">
            <div
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "24px",
                height: "100%",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "25px",
                  fontWeight: "700",
                }}
              >
                Appointment Info
              </h4>

              <div className="mb-4">
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Status
                </p>

                <span
                  style={{
                    background:
                      data.status ===
                      "approved"
                        ? "rgba(34,197,94,0.15)"
                        : "rgba(245,158,11,0.15)",

                    color:
                      data.status ===
                      "approved"
                        ? "#22c55e"
                        : "#f59e0b",

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
                  {data.status}
                </span>
              </div>

              <div className="mb-4">
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Appointment Date
                </p>

                <div className="d-flex align-items-center">
                  <FaCalendarCheck
                    color="#3b82f6"
                    className="me-2"
                  />

                  <span
                    style={{
                      color: "#fff",
                    }}
                  >
                    {
                      data.appointmentDate
                    }
                  </span>
                </div>
              </div>

              <div>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Time Slot
                </p>

                <div className="d-flex align-items-center">
                  <FaClock
                    color="#14b8a6"
                    className="me-2"
                  />

                  <span
                    style={{
                      color: "#fff",
                    }}
                  >
                    {data.timeSlot}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* QUEUE INFO */}
          <div className="col-lg-6 mb-4">
            <div
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "24px",
                height: "100%",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "25px",
                  fontWeight: "700",
                }}
              >
                Queue Information
              </h4>

              <div className="mb-4">
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Token Number
                </p>

                <div className="d-flex align-items-center">
                  <FaClipboardList
                    color="#f59e0b"
                    className="me-2"
                  />

                  <span
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    #
                    {
                      data.queueEntry
                        ?.tokenNumber
                    }
                  </span>
                </div>
              </div>

              <div>
                <p
                  style={{
                    color: "#94a3b8",
                    marginBottom: "8px",
                  }}
                >
                  Queue Status
                </p>

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

                    textTransform:
                      "capitalize",
                  }}
                >
                  {
                    data.queueEntry
                      ?.status
                  }
                </span>
              </div>
            </div>
          </div>

          {/* PATIENT INFO */}
          <div className="col-lg-6 mb-4">
            <div
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "24px",
                height: "100%",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "25px",
                  fontWeight: "700",
                }}
              >
                Patient Information
              </h4>

              <div className="d-flex align-items-center">
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius:
                      "50%",
                    background:
                      "rgba(59,130,246,0.15)",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    marginRight:
                      "15px",
                  }}
                >
                  <FaUser color="#3b82f6" />
                </div>

                <div>
                  <p
                    style={{
                      color:
                        "#94a3b8",
                      marginBottom:
                        "4px",
                      fontSize:
                        "13px",
                    }}
                  >
                    Patient Name
                  </p>

                  <h5
                    style={{
                      color:
                        "#fff",
                      margin: 0,
                    }}
                  >
                    {
                      data
                        .queueEntry
                        ?.appointment
                        ?.patient
                        ?.name
                    }
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* PRESCRIPTION */}
          <div className="col-lg-6 mb-4">
            <div
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "24px",
                height: "100%",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "25px",
                  fontWeight: "700",
                }}
              >
                Prescription
              </h4>

              <div className="d-flex">
                <FaFilePrescription
                  color="#f59e0b"
                  size={24}
                  className="me-3 mt-1"
                />

                <p
                  style={{
                    color: "#e2e8f0",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  {data.prescription ||
                    "Not available"}
                </p>
              </div>
            </div>
          </div>

          {/* REPORT */}
          <div className="col-12">
            <div
              style={{
                background: "#0f172a",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "25px",
                  fontWeight: "700",
                }}
              >
                Medical Report
              </h4>

              <div className="d-flex">
                <FaFileMedical
                  color="#14b8a6"
                  size={24}
                  className="me-3 mt-1"
                />

                <p
                  style={{
                    color: "#e2e8f0",
                    lineHeight: "1.8",
                    margin: 0,
                  }}
                >
                  {data.report ||
                    "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}