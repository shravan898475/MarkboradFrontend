import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentAssignmentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:8081/Markbook/backend/StudentsAssignments.php");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="container">
    
      <div className="card p-d-15">
      <h4 className="text-center">Student Assignments Mark Board</h4>
      <table className="table table-striped table-bordered" style={{ width: '100%' }}>
        <thead className="small text-uppercase bg-body text-muted">
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Assignment</th>
            <th>Due Date</th>
            <th>Marks Obtained</th>
            <th>Total Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_name}</td>
              <td>{student.email}</td>
              <td>{student.title}</td>
              <td>{student.due_date}</td>
              <td>{student.marks_obtained}</td>
              <td>{student.total_marks}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
    </div>
  );
};

export default StudentAssignmentList;