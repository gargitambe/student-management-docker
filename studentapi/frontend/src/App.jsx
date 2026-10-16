import { useEffect, useState } from "react";
import "./App.css";

const API_URL = "http://localhost:8080/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error(error));
  }, []);

  const addStudent = async (e) => {
    e.preventDefault();

    if (!name || !course) {
      alert("Please enter Name and Course");
      return;
    }

    const newStudent = {
      id: students.length + 1,
      name: name,
      course: course,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    const addedStudent = await response.json();

    setStudents([...students, addedStudent]);
    setName("");
    setCourse("");
  };

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <form onSubmit={addStudent}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button type="submit">Add Student</button>
      </form>

      <h2>Students</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;