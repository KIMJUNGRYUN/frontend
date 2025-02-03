import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const {id} = useParams(); //주소변수 id 값을 받기

  const navigate = useNavigate(); //라우터 이동 객체

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const loadUser =  async () => {
   const res =  await axios.get(`http://localhost:8080/users/${id}`);
   setUser(res.data);
  };

  useEffect(() => {
    loadUser();
  }, [])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/users/${id}`, user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">수정 하기</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                이름
              </label>
              <input
                required
                value={name}
                onChange={onInputChange}
                type="text"
                id="name"
                className="form-control"
                placeholder="이름 입력"
                name="name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                유저네임
              </label>
              <input
                required
                value={username}
                onChange={onInputChange}
                type="text"
                id="username"
                className="form-control"
                placeholder="유저네임 입력"
                name="username"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>
              <input
                required
                value={email}
                onChange={onInputChange}
                type="email"
                id="email"
                className="form-control"
                placeholder="이메일 입력"
                name="email"
              />
            </div>

            {/* 버튼을 form 내부로 이동 */}
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-outline-primary px-3 mx-2">
                수정
              </button>
              <Link to="/" className="btn btn-outline-danger px-3 mx-2">
                취소
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
