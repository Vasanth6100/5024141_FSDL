import React, { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [showList, setShowList] = useState(false);
  const [message, setMessage] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);

    // Show success message
    setMessage("✅ Student Added Successfully!");

    // Auto hide after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const deleteStudent = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      {/* Notification */}
      {message && <div className="toast">{message}</div>}

      <div className="top-bar">
        <h1>🎓 Student Dashboard</h1>

        <button
          className="view-btn"
          onClick={() => setShowList(!showList)}
        >
          {showList ? "Close" : "View Students"}
        </button>
      </div>

      <p>Add and manage students easily</p>

      <div className="card">
        <StudentForm addStudent={addStudent} />
      </div>

      {showList && (
        <div className="list-panel">
          <h3 style={{ textAlign: "center" }}>📋 Students</h3>
          <StudentList
            students={students}
            deleteStudent={deleteStudent}
          />
        </div>
      )}
    </div>
  );
}

export default App;