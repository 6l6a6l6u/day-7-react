import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({ name: '', email: '' });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to save student data or update existing student
    setStudent({ name: '', email: '' }); // Clear form fields after submission
  };

  return (
    <div>
      <h2>Create Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default StudentForm;
