import { useEffect, useState } from "react";
import API from "../../api/axios";

export default function QueueList() {
  const [queue, setQueue] = useState([]);

  const fetchQueue = async () => {
    const res = await API.get("/queue");
    setQueue(res.data);
  };

  useEffect(() => {
    fetchQueue();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.patch(`/queue/${id}`, { status });
      alert("Status Updated");
      fetchQueue();
    } catch (err) {
      console.log(err.response?.data);
      alert("Error updating status");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Queue List</h2>

      {queue.map((q) => (
        <div key={q.id} className="card p-3 mb-2">
          <p><strong>Token:</strong> {q.tokenNumber}</p>
          <p><strong>Status:</strong> {q.status}</p>

          <button
            className="btn btn-warning me-2"
            onClick={() => updateStatus(q.id, "waiting")}
          >
            Waiting
          </button>

          <button
            className="btn btn-primary me-2"
            onClick={() => updateStatus(q.id, "in_progress")}
          >
            In Progress
          </button>

          <button
            className="btn btn-success"
            onClick={() => updateStatus(q.id, "done")}
          >
            Done
          </button>
        </div>
      ))}
    </div>
  );
}