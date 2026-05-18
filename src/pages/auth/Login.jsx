import { useState } from "react";
import API from "../../api/axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  const login = async () => {
    try {
      const res = await API.post("/auth/login", {
        email,
        username,
        password,
      });

      console.log("Login Response:", res.data);

      const token = res.data.token;
      const role = res.data.user.role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role.toLowerCase());
      localStorage.setItem("username", res.data.user.name);
      localStorage.setItem("email", res.data.user.email);
      localStorage.setItem("userId", res.data.user.id);
      localStorage.setItem("clinicId", res.data.user.clinicId);

      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: darkMode ? "#0f172a" : "#f1f5f9",
        transition: "0.3s",
      }}
    >
      <div
        className="p-4 position-relative"
        style={{
          width: "100%",
          maxWidth: "420px",
          background: darkMode
            ? "linear-gradient(145deg,#111827,#1e293b)"
            : "#ffffff",
          borderRadius: "20px",
          boxShadow: darkMode
            ? "0 10px 30px rgba(0,0,0,0.4)"
            : "0 10px 30px rgba(0,0,0,0.1)",
          border: darkMode
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid #e2e8f0",
        }}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            border: "none",
            padding: "6px 12px",
            borderRadius: "10px",
            cursor: "pointer",
            background: darkMode ? "#1f2937" : "#e2e8f0",
            color: darkMode ? "#fff" : "#000",
            fontSize: "12px",
          }}
        >
          {darkMode ? "🌙 Dark" : "☀ Light"}
        </button>

        {/* Title */}
        <h2
          className="text-center mb-4"
          style={{
            color: darkMode ? "#fff" : "#111",
            fontWeight: "700",
          }}
        >
          Welcome Back
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "12px",
            padding: "12px",
            borderRadius: "12px",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid #cbd5e1",
            background: darkMode ? "#0f172a" : "#fff",
            color: darkMode ? "#fff" : "#000",
            outline: "none",
          }}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            marginBottom: "18px",
            padding: "12px",
            borderRadius: "12px",
            border: darkMode
              ? "1px solid rgba(255,255,255,0.1)"
              : "1px solid #cbd5e1",
            background: darkMode ? "#0f172a" : "#fff",
            color: darkMode ? "#fff" : "#000",
            outline: "none",
          }}
        />

        {/* Button */}
        <button
          onClick={login}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg,#3b82f6,#14b8a6)",
            color: "#fff",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p className="text-center text-sm mt-4 " style={{color: darkMode ? "#fff" : "#000"}}>
          Use: enrollment@darshan.ac.in / password123
        </p>
      </div>
    </div>
  );
}
