import React, { useState } from "react";

function StudentForm({ addStudent }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.age || !form.course) {
      alert("Please fill all fields");
      return;
    }

    addStudent(form);
    setForm({ name: "", age: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="👤 Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="age"
        type="number"
        placeholder="🎂 Age"
        value={form.age}
        onChange={handleChange}
      />

      <input
        name="course"
        placeholder="📘 Course"
        value={form.course}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;