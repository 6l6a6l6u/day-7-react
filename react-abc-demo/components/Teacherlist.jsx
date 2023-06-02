import React, { useState } from 'react';

const teacherList = () => {
  const [teachers, setTeachers] = useState([]);

  // Function to delete a Teacher
  const deleteTeacher = (id) => {
    const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
    setTeachers(updatedTeachers);
  };

  return (
    <div>
      <h2>Manage Teachers</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <div>{teacher.name}</div>
            <div>{teacher.email}</div>
            <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TecaherList;
