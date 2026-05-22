import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!localStorage.getItem("token")) {
    window.location.href = "/";
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try {
      await axios.post("http://localhost:5000/api/tasks/add", {
        title,
      });

      setTitle("");
      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>

      <h1>Welcome to Dashboard 🎉</h1>

      <button onClick={logout}>
        Logout
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <br /><br />

      {tasks.map((task) => (
        <div key={task._id}>
          <p>{task.title}</p>
        </div>
      ))}

    </div>
  );
}

export default Dashboard;
