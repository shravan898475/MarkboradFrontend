import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  const name=sessionStorage.getItem('Name');


  const Logout = ()=>
    {
      sessionStorage.clear(); // Clears all session storage (optional)
  window.location.reload(); // Refresh the page to reflect logout
       
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><b>Home</b> </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">Student Assignments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/marking">Assignment Marking</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-assignment">Create Assignment</Link>
            </li>
          </ul>

          {/* Right-side user profile & logout button */}
          <div className="ms-auto d-flex align-items-center">
            <span className="me-3">Staff: ({name})</span>
            <button className="btn btn-outline-danger" onClick={Logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
