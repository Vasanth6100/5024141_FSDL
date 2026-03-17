import React from "react";

function StudentItem({ student, index, deleteStudent }) {
  return (
    <div className="student-card">
      
      {/* Student Info */}
      <h3>👤 {student.name}</h3>
      <p>🎂 Age: {student.age}</p>
      <p>📘 Course: {student.course}</p>

      {/* Delete Button */}
      <button
        className="delete-btn"
        onClick={() => deleteStudent(index)}
      >
        ❌ Delete
      </button>

    </div>
  );
}

export default StudentItem;