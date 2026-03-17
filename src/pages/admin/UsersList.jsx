import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function UsersList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/admin/users").then((res) => setData(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Users</h2>

      {data.map((u) => (
        <div key={u.id} className="card p-2 mb-2">
          <p>{u.name}</p>
          <p>{u.email}</p>
          <p>{u.role}</p>
        </div>
      ))}
    </div>
  );
}