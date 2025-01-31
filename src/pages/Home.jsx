import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8080/users');
      console.log(result.data); // 데이터 확인
      setUsers(result.data); // ⬅️ 데이터 상태 업데이트 추가
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="container">
      <table className="table border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th>이름</th>
            <th>유저네임</th>
            <th>이메일</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
