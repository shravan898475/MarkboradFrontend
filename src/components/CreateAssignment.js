import React, { useState } from "react";
import axios from "axios";
const CreateAssignment = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");

  const handleSubmit = async () => {
    const payload = {
      title: title,
      description: description,
      due_date: duedate,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/Markbook/backend/Addassignments.php",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert(response.data.message);
    } catch (error) {
      console.error("Error creating assignment:", error);
      alert("Failed to create assignment.");
    }
  };

  return (
    <div className="conatiner">
      
      <div className="card p-d-15">
      <h4 className="text-center">Create Assignment</h4>
        <form className="row">
          {/* Assignment Title Input */}
          <div className="col-md-12 mb-3">
            <label htmlFor="assignmentTitle" className="form-label">
              Assignment Title
            </label>
            <input
              type="text"
              id="assignmentTitle"
              className="form-control"
              placeholder="Assignment Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="assignmentTitle" className="form-label">
              Assignment description
            </label>
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="Assignment description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="assignmentTitle" className="form-label">
              Assignment Due Date
            </label>
            <input
              type="date"
              id="due_date"
              className="form-control"
              placeholder="Assignment due date"
              value={duedate}
              onChange={(e) => setDuedate(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignment;
