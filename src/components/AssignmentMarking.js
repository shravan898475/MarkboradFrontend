import React, { useEffect, useState } from "react";
import axios from "axios";
const AssignmentMarking = () => {
    const [assignments, setAssignments] = useState([]);
    const [studentlist,setStudentlist]=useState([]);
    const [loading, setLoading] = useState(true);

    const [assignmentId, setAssignmentId] = useState("");
    const [studentId, setStudentId] = useState("");
    const [marksObtained, setMarksObtained] = useState("");
    const [totalMarks, setTotalMarks] = useState("");

    
    useEffect(() => {
        const fetchapi = async () => {
            try {
                const response = await axios.get("http://localhost:8081/Markbook/backend/getAssignments.php");
                setAssignments(response.data);

                const res = await axios.get("http://localhost:8081/Markbook/backend/getStudent.php");
                setStudentlist(res.data);

            } catch (error) {
                console.error("Error fetching assignments:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchapi();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
          student_id: studentId,
          assignment_id: assignmentId,
          marks_obtained: marksObtained,
          total_marks: totalMarks,
        };

        console.log(payload);
        try {
          const response = await axios.post( "http://localhost:8081/Markbook/backend/mark_assignment.php",
            payload,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          alert(response.data.message);
        } catch (error) {
          console.error("Error submitting marks:", error);
          alert("Error submitting marks");
        }
      };

    if (loading) return <p>Loading assignments...</p>;

    return (
      <div className="container">
       
        <div className="card p-d-15">
        <h4 className="text-center">Assignment Marking</h4>
          <div className="row">
            <form className="row">
              <div className="col-md-3">
              <div className="form-group">
                <label>Assignment</label>
                <select
                  id="assignment"
                  className="form-control"
                  onChange={(e) => setAssignmentId(e.target.value)}
                >
                  <option value="">Select Assignment</option>

                  {assignments.map((assignment) => (
                    <option
                      key={assignment.id}
                      value={assignment.id}
                    >
                      {assignment.title}
                    </option>
                  ))}
                </select>
                </div>
                
              </div>
              <div className="col-md-3">
                <div className="form-group">
                <label >Student</label>
                <select
                  id="assignment"
                  className="form-control"
                  onChange={(e) => setStudentId(e.target.value)}
                >
                  <option value="">Select Student</option>
                  {studentlist.map((stds) => (
                    <option key={stds.id} value={stds.id}>
                      {stds.name}
                    </option>
                  ))}
                </select>
                </div>
               
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label >Marks Obtained</label>
                  <input
                    type="number"
                    className="form-control"
                    id="marksObtained"
                    placeholder="Enter marks obtained"
                    value={marksObtained}
                    onChange={(e) => setMarksObtained(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group ">
                  <label >Total Marks</label>
                  <input
                    type="number"
                    className="form-control"
                    id="totalMarks"
                    placeholder="Enter total marks"
                    value={totalMarks}
                    onChange={(e) => setTotalMarks(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4 d-flex align-items-end mt-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Submit Marks
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default AssignmentMarking;
