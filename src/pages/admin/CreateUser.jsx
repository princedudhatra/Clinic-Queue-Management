import { useState } from "react";
import API from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
  try {
    const res = await API.post("/admin/users", {
      name,
      email,
      password,
      role,
      clinicId: 304,
    });

    console.log(res.data);
    alert("User Created");
    nav("/users");

  } catch (err) {
    console.log("ERROR:", err.response?.data);
    alert("Failed: " + JSON.stringify(err.response?.data));
  }
};

  return (
    <div className="container mt-4">
      <h2>Create User</h2>

      <input className="form-control mb-2" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="form-control mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="form-control mb-2" placeholder="Role" onChange={(e) => setRole(e.target.value)} />
      <input type="password" className="form-control mb-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

      <button className="btn btn-primary" onClick={submit}>
        Create
      </button>
    </div>
  );
}