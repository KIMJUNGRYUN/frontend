import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <table className="table text-center border shadow my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope='col'>이름</th>
            <th scope='col'>유저네임</th>
            <th scope='col'>이메일</th>
            <th scope='col'>액션</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-outline-secondary mx-2">보기</button>
                <Link 
                  to={`/edituser/${user.id}`} 
                  className="btn btn-outline-warning mx-2">
                  수정
                </Link>
                <button className="btn btn-outline-danger mx-2">삭제</button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
