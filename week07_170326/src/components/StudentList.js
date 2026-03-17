import React from "react";
import StudentItem from "./StudentItem";

function StudentList({ students, deleteStudent }) {
  return (
    <div>
    
      {students.map((student, index) => (
        <StudentItem
          key={index}
          student={student}
          index={index}
          deleteStudent={deleteStudent}
        />
      ))}
    </div>
  );
}

export default StudentList;