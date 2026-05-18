import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaUserEdit,
  FaTrash,
  FaArrowLeft,
  FaUserShield,
} from "react-icons/fa";

import API from "../../api/axios";

export default function UsersList() {
  const nav = useNavigate();

  const [data, setData] = useState([]);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Delete User
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/admin/users/${id}`);

      setData((prev) =>
        prev.filter((user) => user.id !== id)
      );

      alert("User deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  };

  // Edit User
  const handleEdit = (id) => {
    nav(`/edit-user/${id}`);
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
            Users Management
          </h2>

          <p
            style={{
              color: "#94a3b8",
              margin: 0,
            }}
          >
            Manage all registered system users
          </p>
        </div>
      </div>

      {/* Main Card */}
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
            <FaUsers size={42} color="#3b82f6" />
          </div>

          <h3
            style={{
              color: "#fff",
              fontWeight: "700",
            }}
          >
            System Users
          </h3>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Admin can manage, edit and remove users
          </p>
        </div>

        {/* Users List */}
        <div className="row">
          {data.map((u) => (
            <div
              key={u.id}
              className="col-lg-6 mb-4"
            >
              <div
                style={{
                  background: "#0f172a",
                  border:
                    "1px solid rgba(255,255,255,0.04)",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow:
                    "0 6px 18px rgba(0,0,0,0.18)",
                }}
              >
                {/* Top */}
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
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "22px",
                      marginRight: "18px",
                    }}
                  >
                    {u.name?.charAt(0)?.toUpperCase()}
                  </div>

                  {/* User Info */}
                  <div>
                    <h5
                      style={{
                        color: "#fff",
                        marginBottom: "5px",
                        fontWeight: "600",
                      }}
                    >
                      {u.name}
                    </h5>

                    <p
                      style={{
                        color: "#94a3b8",
                        marginBottom: "6px",
                        fontSize: "14px",
                      }}
                    >
                      {u.email}
                    </p>

                    <div
                      className="d-inline-flex align-items-center"
                      style={{
                        background:
                          "rgba(59,130,246,0.15)",
                        color: "#60a5fa",
                        padding: "6px 12px",
                        borderRadius: "30px",
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      <FaUserShield className="me-2" />
                      {u.role}
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="d-flex gap-3">
                  {/* Edit */}
                  <button
                    onClick={() =>
                      handleEdit(u.id)
                    }
                    className="btn w-100 d-flex align-items-center justify-content-center"
                    style={{
                      background:
                        "rgba(59,130,246,0.15)",
                      color: "#60a5fa",
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <FaUserEdit className="me-2" />
                    Edit
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() =>
                      handleDelete(u.id)
                    }
                    className="btn w-100 d-flex align-items-center justify-content-center"
                    style={{
                      background:
                        "rgba(239,68,68,0.15)",
                      color: "#ef4444",
                      border: "none",
                      borderRadius: "12px",
                      padding: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <FaTrash className="me-2" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {data.length === 0 && (
          <div className="text-center py-5">
            <h5 style={{ color: "#94a3b8" }}>
              No users found
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}