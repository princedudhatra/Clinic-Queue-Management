import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaClinicMedical,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import API from "../../api/axios";

export default function ClinicInfo() {
  const nav = useNavigate();

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
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px 20px",
      }}
    >
      {/* Top Section */}
      <div
        className="d-flex justify-content-between align-items-center mb-4"
      >
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
            Clinic Information
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Healthcare Management Details
          </p>
        </div>
      </div>

      {/* Clinic Card */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "850px",
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
        {/* Header */}
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
            <FaClinicMedical
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
            {clinic.name || "Clinic Name"}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Professional Healthcare Center
          </p>
        </div>

        {/* Information Grid */}
        <div className="row g-4">
          {/* Address */}
          <div className="col-md-6">
            <div
              style={{
                background: "#0f172a",
                padding: "22px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background:
                      "rgba(59,130,246,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "14px",
                  }}
                >
                  <FaMapMarkerAlt
                    color="#3b82f6"
                    size={20}
                  />
                </div>

                <div>
                  <h6
                    style={{
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    Address
                  </h6>

                  <small
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Clinic Location
                  </small>
                </div>
              </div>

              <p
                style={{
                  color: "#e2e8f0",
                  margin: 0,
                  lineHeight: "1.7",
                }}
              >
                {clinic.address ||
                  "No address available"}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <div
              style={{
                background: "#0f172a",
                padding: "22px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background:
                      "rgba(20,184,166,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "14px",
                  }}
                >
                  <FaPhoneAlt
                    color="#14b8a6"
                    size={18}
                  />
                </div>

                <div>
                  <h6
                    style={{
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    Phone
                  </h6>

                  <small
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Contact Number
                  </small>
                </div>
              </div>

              <p
                style={{
                  color: "#e2e8f0",
                  margin: 0,
                }}
              >
                {clinic.phone ||
                  "No phone available"}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-12">
            <div
              style={{
                background: "#0f172a",
                padding: "22px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background:
                      "rgba(14,165,233,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "14px",
                  }}
                >
                  <FaEnvelope
                    color="#0ea5e9"
                    size={18}
                  />
                </div>

                <div>
                  <h6
                    style={{
                      color: "#fff",
                      marginBottom: "4px",
                    }}
                  >
                    Email
                  </h6>

                  <small
                    style={{
                      color: "#94a3b8",
                    }}
                  >
                    Official Email Address
                  </small>
                </div>
              </div>

              <p
                style={{
                  color: "#e2e8f0",
                  margin: 0,
                }}
              >
                {clinic.email ||
                  "No email available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}