import { useEffect, useState } from "react";
import API from "../../api/axios";

import {
  FaClipboardList,
  FaArrowLeft,
  FaClock,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function QueueList() {
  const [queue, setQueue] = useState([]);

  const nav = useNavigate();

  const fetchQueue = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];

      const res = await API.get(`/queue?date=${today}`);

      setQueue(res.data);
    } catch (err) {
      console.log("QUEUE ERROR:", err.response?.data);

      alert(JSON.stringify(err.response?.data));
    }
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      // UPDATE QUEUE STATUS
      await API.patch(`/queue/${id}`, {
        status,
      });

      // ALSO UPDATE APPOINTMENT STATUS
      await API.patch(`/appointments/${id}`, {
        status,
      });

      alert("Status Updated");

      fetchQueue();
    } catch (err) {
      console.log(err.response?.data);

      alert("Error updating status");
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
            Queue List
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Manage patient queue status
          </p>
        </div>
      </div>

      {/* MAIN CARD */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "1100px",
          background: "linear-gradient(145deg,#111827,#1e293b)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "24px",
          padding: "35px",
          boxShadow: "0 12px 35px rgba(0,0,0,0.28)",
        }}
      >
        {/* HEADER */}
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
            <FaClipboardList size={42} color="#3b82f6" />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            Patient Queue Management
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Update queue progress and patient status
          </p>
        </div>

        {/* QUEUE LIST */}
        <div className="row">
          {queue.map((q) => (
            <div key={q.id} className="col-lg-6 mb-4">
              <div
                style={{
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                  height: "100%",
                }}
              >
                {/* TOKEN */}
                <div className="mb-4">
                  <h4
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                    }}
                  >
                    Token #{q.tokenNumber}
                  </h4>

                  <div
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    <span
                      style={{
                        background:
                          q.status === "waiting"
                            ? "rgba(245,158,11,0.15)"
                            : q.status === "in_progress"
                              ? "rgba(59,130,246,0.15)"
                              : "rgba(34,197,94,0.15)",

                        color:
                          q.status === "waiting"
                            ? "#f59e0b"
                            : q.status === "in_progress"
                              ? "#60a5fa"
                              : "#22c55e",

                        padding: "7px 16px",

                        borderRadius: "30px",

                        fontSize: "13px",

                        fontWeight: "600",

                        textTransform: "capitalize",
                      }}
                    >
                      {q.status.replace("_", " ")}
                    </span>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="d-flex flex-wrap gap-3">
                  {/* Waiting */}
                  <button
                    className="btn d-flex align-items-center justify-content-center"
                    onClick={() => updateStatus(q.id, "waiting")}
                    style={{
                      flex: 1,
                      minWidth: "120px",
                      background: "rgba(245,158,11,0.15)",
                      color: "#f59e0b",
                      border: "none",
                      borderRadius: "14px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <FaClock className="me-2" />
                    Waiting
                  </button>

                  {/* In Progress */}
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => updateStatus(q.id, "in-progress")}
                  >
                    In Progress
                  </button>

                  <button
                    className="btn btn-success me-2"
                    onClick={() => updateStatus(q.id, "done")}
                  >
                    Done
                  </button>

                  <button
                    className="btn btn-warning"
                    onClick={() => updateStatus(q.id, "skipped")}
                  >
                    Skipped
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {queue.length === 0 && (
          <div className="text-center py-5">
            <h5
              style={{
                color: "#94a3b8",
              }}
            >
              No queue data available
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}
