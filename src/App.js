import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css"; // Global CSS
import NavigationBar from "./components/Navbar";
import StudentAssignmentList from "./components/StudentAssignmentList";
import AssignmentMarking from "./components/AssignmentMarking";
import CreateAssignment from "./components/CreateAssignment";
import Login from "./components/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("Name")
  );

  return (
    <Router>
      {isAuthenticated && <NavigationBar />}
      <div className="container mt-4">
        <Routes>
          {/* Show login first, then redirect to assignments if authenticated */}
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/students" replace />
              ) : (
                <Login onLogin={() => setIsAuthenticated(true)} />
              )
            }
          />
          <Route
            path="/students"
            element={
              isAuthenticated ? (
                <StudentAssignmentList />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/marking"
            element={
              isAuthenticated ? (
                <AssignmentMarking />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/create-assignment"
            element={
              isAuthenticated ? (
                <CreateAssignment />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
