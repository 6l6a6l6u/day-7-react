import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  // Function to delete a student
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>Manage Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <div>{student.name}</div>
            <div>{student.email}</div>
            <button onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
