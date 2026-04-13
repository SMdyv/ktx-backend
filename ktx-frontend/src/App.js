import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students")
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách sinh viên</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Mã SV</th>
            <th>Giới tính</th>
            <th>Phòng</th>
          </tr>
        </thead>

        <tbody>
          {students.map((sv) => (
            <tr key={sv.id}>
              <td>{sv.id}</td>
              <td>{sv.name}</td>
              <td>{sv.student_code}</td>
              <td>{sv.gender}</td>
              <td>{sv.room_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
