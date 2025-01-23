import React, { useState } from "react";
import API from "../services/api";

const TaskCard = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ title: task.title, description: task.description });

  // Mark task as completed
  
  const handleComplete = async () => {
    try {
      await API.put(`/tasks/${task._id}`, { status: "completed" });
      alert("Task marked as completed!");
      fetchTasks();
    } catch (err) {
      console.error("Error completing task:", err);
    }
  };

  // Update task
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/tasks/${task._id}`, updatedTask);
      alert("Task updated successfully!");
      setIsEditing(false);
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // Delete task
  const handleDelete = async () => {
    try {
      await API.delete(`/tasks/${task._id}`);
      alert("Task deleted!");
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-2">
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
            className="p-2 border rounded w-full"
            required
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
            className="p-2 border rounded w-full"
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </form>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2">{task.title}</h3>
          <p className="mb-2">{task.description}</p>
          <p className={`mb-4 ${task.status === "completed" ? "text-green-600" : "text-yellow-600"}`}>
            Status: {task.status}
          </p>
          <div className="flex justify-between">
            {task.status !== "completed" && (
              <button onClick={handleComplete} className="bg-green-500 text-white px-4 py-2 rounded">
                Complete
              </button>
            )}
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded">
              Edit
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </>
      )}




    </div>
  );
};

export default TaskCard;
