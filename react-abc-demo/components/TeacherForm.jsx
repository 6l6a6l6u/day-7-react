import React, { useState } from 'react';

const TeacherForm = () => {
  const [teacher, setTeacher] = useState({ name: '', email: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to save teacher data or update existing student
    setTeacher({ name: '', email: '' }); // Clear form fields after submission
  };

  return (
    <div>
      <h2>Create tecaher</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={teacher.name}
            onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={teacher.email}
            onChange={(e) => setTeacher({ ...teacher, email: e.target.value })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TeacherForm;
