import { useState } from "react";

import API from "../../api/axios";

import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaCalendarCheck,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const [date, setDate] = useState("");

  const [timeSlot, setTimeSlot] =
    useState("");

  const nav = useNavigate();

  const submit = async () => {
    try {
      const res = await API.post(
        "/appointments",
        {
          appointmentDate: date,
          timeSlot: timeSlot,
        }
      );

      console.log(res.data);

      alert(
        "Appointment Booked Successfully"
      );

      window.location.href =
        "/appointments";
    } catch (err) {
      console.log(
        "ERROR:",
        err.response?.data
      );

      alert(
        "Failed: " +
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
            Book Appointment
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Schedule your healthcare
            appointment
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "700px",
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
            Appointment Booking
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Select your preferred date
            and time slot
          </p>
        </div>

        {/* DATE FIELD */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Appointment Date
          </label>

          <div className="position-relative">
            <FaCalendarAlt
              style={{
                position: "absolute",
                top: "17px",
                left: "16px",
                color: "#64748b",
              }}
            />

            <input
              type="date"
              className="form-control"
              onChange={(e) =>
                setDate(e.target.value)
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

        {/* TIME SLOT FIELD */}
        <div className="mb-4">
          <label
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
              display: "block",
              fontWeight: "500",
            }}
          >
            Time Slot
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
              placeholder="Enter Time Slot (e.g. 10:00-10:15)"
              onChange={(e) =>
                setTimeSlot(
                  e.target.value
                )
              }
              style={{
                background: "#323d58",
                border:
                  "1px solid rgba(255,255,255,0.06)",
                color: "#f3f3f6",
                padding:
                  "14px 14px 14px 45px",
                borderRadius: "14px",
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
              "linear-gradient(135deg,#3b82f6,#14b8a6)",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "14px",
            fontWeight: "600",
            fontSize: "16px",
            marginTop: "10px",
            boxShadow:
              "0 10px 25px rgba(59,130,246,0.25)",
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}