import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaClinicMedical,
  FaUsers,
  FaUserPlus,
  FaBars,
} from "react-icons/fa";

export default function AdminDashboard() {
  const nav = useNavigate();

  const [sidebarOpen, setSidebarOpen] =
    useState(true);

  const [dropdownOpen, setDropdownOpen] =
    useState(false);

  // Fixed Admin Details
  const user = {
  name: localStorage.getItem("username"),
  role: localStorage.getItem("role"),
  email: localStorage.getItem("email"),
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("clinicId");

    nav("/login");
  };

  const menuItems = [
    {
      title: "Clinic Info",
      icon: <FaClinicMedical />,
      path: "/clinic",
      color: "#3b82f6",
    },
    {
      title: "Users",
      icon: <FaUsers />,
      path: "/users",
      color: "#14b8a6",
    },
    {
      title: "Create User",
      icon: <FaUserPlus />,
      path: "/create-user",
      color: "#0ea5e9",
    },
  ];

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#f8fafc",
      }}
    >
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "d-block" : "d-none"}`}
        style={{
          width: "260px",
          background: "#111827",
          borderRight:
            "1px solid rgba(255,255,255,0.05)",
          padding: "24px 18px",
        }}
      >
        {/* Logo */}
        <div className="mb-5">
          <h3
            className="fw-bold"
            style={{
              color: "#f8fafc",
            }}
          >
            MediCare
          </h3>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "14px",
            }}
          >
            Admin Dashboard
          </p>
        </div>

        {/* Sidebar Menu */}
        <ul className="nav flex-column">
          {menuItems.map((item, index) => (
            <li key={index} className="mb-3">
              <button
                onClick={() => nav(item.path)}
                className="btn w-100 d-flex align-items-center"
                style={{
                  background: "#1e293b",
                  color: "#e2e8f0",
                  padding: "14px 16px",
                  borderRadius: "14px",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                  boxShadow:
                    "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <span
                  className="me-3"
                  style={{
                    fontSize: "18px",
                    color: item.color,
                  }}
                >
                  {item.icon}
                </span>

                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Navbar */}
        <div
          className="d-flex justify-content-between align-items-center position-relative"
          style={{
            background: "#111827",
            padding: "20px 28px",
            borderBottom:
              "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Left Side */}
          <div className="d-flex align-items-center">
            <button
              className="btn me-3"
              onClick={() =>
                setSidebarOpen(!sidebarOpen)
              }
              style={{
                width: "44px",
                height: "44px",
                background: "#1e293b",
                border: "none",
                borderRadius: "12px",
                color: "#fff",
              }}
            >
              <FaBars />
            </button>

            <div>
              <h4
                className="m-0"
                style={{
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Admin Dashboard
              </h4>

              <small
                style={{
                  color: "#94a3b8",
                }}
              >
                Healthcare Management System
              </small>
            </div>
          </div>

          {/* Right Top Profile */}
          <div className="position-relative">
            <div
              onClick={() =>
                setDropdownOpen(!dropdownOpen)
              }
              className="d-flex align-items-center"
              style={{
                background: "#1e293b",
                padding: "8px 14px",
                borderRadius: "14px",
                cursor: "pointer",
                border:
                  "1px solid rgba(255,255,255,0.05)",
                minWidth: "200px",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#3b82f6,#14b8a6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: "700",
                  marginRight: "12px",
                }}
              >
                {user.name?.charAt(0).toUpperCase()}
              </div>

              {/* User Info */}
              <div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "1.2",
                  }}
                >
                  {user.name}
                </div>

                <div
                  style={{
                    color: "#94a3b8",
                    fontSize: "12px",
                  }}
                >
                  {user.role}
                </div>
              </div>
            </div>

            {/* Dropdown */}
            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "70px",
                  right: "0",
                  width: "220px",
                  background: "#111827",
                  borderRadius: "16px",
                  padding: "16px",
                  border:
                    "1px solid rgba(255,255,255,0.05)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35)",
                  zIndex: 1000,
                }}
              >
                <p
                  style={{
                    color: "#94a3b8",
                    fontSize: "13px",
                    marginBottom: "8px",
                  }}
                >
                  Logged in as
                </p>

                <h6 style={{ color: "#fff" }}>
                  {user.name}
                </h6>

                <p
                  style={{
                    color: "#60a5fa",
                    fontSize: "13px",
                  }}
                >
                  {user.role}
                </p>

                <button
                  onClick={handleLogout}
                  className="btn w-100"
                  style={{
                    background: "#dc2626",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="container py-4">
          <div className="row">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="col-md-4 mb-4"
              >
                <div
                  onClick={() => nav(item.path)}
                  style={{
                    background:
                      "linear-gradient(145deg,#111827,#1e293b)",
                    border:
                      "1px solid rgba(255,255,255,0.05)",
                    borderRadius: "22px",
                    padding: "28px",
                    cursor: "pointer",
                    transition: "0.3s",
                    boxShadow:
                      "0 8px 24px rgba(0,0,0,0.22)",
                    height: "100%",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      borderRadius: "18px",
                      background: `${item.color}20`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "28px",
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    Access and manage all{" "}
                    {item.title.toLowerCase()} details
                    securely through this section.
                  </p>

                  {/* Button */}
                  <button
                    className="btn mt-3"
                    style={{
                      background: item.color,
                      color: "#fff",
                      border: "none",
                      borderRadius: "12px",
                      padding: "10px 20px",
                      fontWeight: "500",
                    }}
                  >
                    Open
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}