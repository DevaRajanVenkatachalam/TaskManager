import React, { useState, useEffect } from "react";
import API from "../services/api";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState({ total: 0, completed: 0, pending: 0 });
  const [filter, setFilter] = useState("all");
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  // Fetch tasks and stats
  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks"); // Fetch all tasks from backend
      setTasks(data);

      // Calculate statistics
      const total = data.length;
      const completed = data.filter((task) => task.status === "completed").length;
      const pending = total - completed;
      setStats({ total, completed, pending });
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter tasks based on the selected status
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    return task.status === filter;
  });

  // Handle task creation
  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      await API.post("/tasks", { ...newTask, status: "pending" }); // Default status is pending
      setNewTask({ title: "", description: "" });
      alert("Task created successfully!");
      fetchTasks(); // Refresh tasks
    } catch (err) {
      console.error("Error creating task:", err);
      alert("Failed to create task!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Task Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded shadow">
          <h2 className="text-xl font-bold">Total Tasks</h2>
          <p className="text-2xl">{stats.total}</p>
        </div>
        <div className="p-4 bg-green-100 rounded shadow">
          <h2 className="text-xl font-bold">Completed Tasks</h2>
          <p className="text-2xl">{stats.completed}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded shadow">
          <h2 className="text-xl font-bold">Pending Tasks</h2>
          <p className="text-2xl">{stats.pending}</p>
        </div>
      </div>

      {/* Create New Task */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Create New Task</h2>
        <form onSubmit={handleCreateTask} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <textarea
            placeholder="Task Description"
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            className="p-2 border rounded"
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Task
          </button>
        </form>
      </div>

      {/* Filter Tasks */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Filter Tasks</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Task List */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Tasks</h2>
        {filteredTasks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map((task) => (
              <TaskCard key={task._id} task={task} fetchTasks={fetchTasks} />
            ))}
          </div>
        ) : (
          <p>No tasks found!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
