## 리엑트 && SpringBoot

# 프론트엔트 설정, 새 리액트 프로젝트 만들기

```react
$ npx create-react-app frontend --user-npm
```

```
$ cd frontend
```

<hr>

# 파일 정리

- index.js

```react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- app.js

```react
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
​
```

<hr>

# 패키지 폴더와 jsx 파일들 만들기


![package](https://github.com/user-attachments/assets/1ac3bea5-1d68-49c7-bd88-5f52d436e4b0)

- Navbar

```react
import React from 'react'

function Navbar() {
  return (
    <div>
      네브바
    </div>
  )
}

export default Navbar;
​
```

- App

```react
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
```

<hr>

# BootStrap 적용

[BootStrap](https://www.npmjs.com/package/bootstrap)

```react
 npm i bootstrap
```

- 패키지 .json에 보면 설치된 부스트트랩이 디펜던시에 추가됨

```react
 "bootstrap": "^5.3.3",
```

- App.js에 부트스트랩 css 파일 불러오기

```react
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
```

```react
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle';
```

- 부트스트랩 공식 홈페이지 5버전 공식 문서 Navbar 가져오기


```react
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
```

- jsx 문법에서는 class => className으로 바뀌어야 한다!

- 네브바 로고글자 대신에 

```react
  <a className="navbar-brand text-warning" href="#">
          리액트 & 스프링부트
        </a>
```

- navbar-expand-가로사이즈 에 따라서 이하가 되면 햄버거 버튼이 생긴다.

```react
navbar-expand-md
```

```react
 <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-outline-light">유저 추가</button>
            </li>
          </ul>
```

<hr>

# HomePage

[Table](https://getbootstrap.kr/docs/5.2/content/tables/#content)

- App

```react
    <div className="App">
      <Navbar />
      <Home />
    </div>
```

- Home

```react
function Home() {
  return (
    <div className="container">
      <table className="table border shadow my-4">

      </table>
    </div>
  );
}
```

<hr>

# Axios 와 CORS 에러

```react
npm i axios
```

- Home

```react
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    console.log(result);
  };

  return (
```

- 백엔드 실행시 에러발생 CORS 에러
  - 현재 브라우저에서 리엑트 서버 localhost:3173 에서 실행되는데 갑자기 localhost:8080에서 가져오니까 포트가 다르므로(동일 출처가 아님) 보안 문제가 있으므로 블록 처리됨
 
-CORS(Cross-Origin Resource Sharing) 오류는 웹 애플리케이션에서 발생하는 일반적인 오류입니다. 웹 브라우저는 보안 상의 이유로 스크립트나 스타일시트, 폰트 등과 같은 리소스에 대해 동일 출처 정책(Same-Origin Policy)을 적용합니다. 즉, 스크립트가 로드된 출처와 리소스를 요청하는 출처가 동일해야 합니다.

- CORS 오류는 다른 출처에서 리소스를 요청할 때 발생할 수 있습니다. 예를 들어, 웹 애플리케이션이 도메인 A에서 호스팅되고 있을 때, 도메인 B에서 스크립트를 실행하거나 Ajax 요청을 보내면 브라우저에서는 보안상의 이유로 이 요청을 차단하게 됩니다. 이때 브라우저는 HTTP 헤더를 통해 CORS 정책을 검사하고, 출처가 다른 요청에 대해서는 접근을 허용하지 않는 것이 일반적입니다.

- CORS 오류를 해결하기 위해서는 1. 웹 서버에서 올바른 CORS 정책을 설정해야 합니다. 서버에서 CORS를 허용하려면 응답 헤더에 "Access-Control-Allow-Origin" 헤더를 추가하여 다른 도메인에서 접근할 수 있도록 해야 합니다. 이 헤더의 값을 "*"로 설정하면 모든 도메인에서 접근이 가능합니다. 또는 특정 도메인만 접근을 허용하려면 해당 도메인을 헤더 값으로 설정해야 합니다.

- 서버 측에서 CORS 설정을 변경할 수 없는 경우에는 2. 프록시 서버를 사용하여 CORS를 우회할 수도 있습니다. 클라이언트에서 프록시 서버에 요청을 보내고, 프록시 서버는 해당 요청을 받아 원격 서버에 보내고 응답을 다시 클라이언트에게 전달합니다. 이렇게 하면 원격 서버의 동일 출처 정책에 영향을 받지 않게 됩니다.

​[참고](https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F)

<hr>

# User data 테이블로 출력

- 엑시오스 결과에서 필요한 data 부분만 출력.

```react
  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/users');
    console.log(result.data);
  };
```

- 엑시오스로 받아온 데이터를 users 에 저장한다. 이때 setUsers 메서드 사용


```react
console.log(result.data); 수정하기
```

- 테이블의 <tbody>의 <tr>중 1줄만 남기고 삭제

```react
           {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{ index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
```

```react
  <table className="table border shadow text-? my-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">유저네임</th>
            <th scope="col">이메일</th>
          </tr>
        </thead>
```

<hr>

# Action Button Add

- 테이블 제목에 액션 추가

```react
<th scope="col">액션</th>

```

```react
   <td>
                <button className="btn btn-outline-secondary mx-2">보기</button>
                <button className="btn btn-outline-warning mx-2">수정</button>
                <button className="btn btn-outline-danger mx-2">삭제</button>
              </td>
```

![react   springboot](https://github.com/user-attachments/assets/10f5517d-800f-45a1-8a4a-e598812842e7)

<hr>

# react-router-dom

- 우리가 흔히 말하는 "페이지 이동"이라는 기능을 리액트에서는 리액트 라우터를 통해 처리할 수 있다.

**라우팅이란?**
  - 사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것이라고 생각할 수 있다.
  - 리액트는 SPA (Single Page Application) 방식

 - 기존 웹 페이지 처럼(MPA 방식) 여러개의 페이지를 사용, 새로운 페이지를 로드하는 방식이 아니다.

 - 새로운 페이지를 로드하지 않고 하나의 페이지 안에서 필요한 데이터만 가져오는 형태를 가진다.

​  - React-Router는 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리 라고 볼 수 있다.

 [react-router-dom](https://www.npmjs.com/package/react-router-dom)

 - AddUser.js


```react
function AddUser() {
  return <div>유저추가</div>;
}

export default AddUser;
```

- App.js
  - 1. 브라우저라우터 가 가장 최상단에 있어야 한다.
  - 2. 각각의 라우트들 상단에 라우츠가 있어야 한다.
  - 3. 각각의 라우트는 path에 url 주소 입력, element에 보여줄 컴포넌트를 넣음


```react
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}
```

<hr>

# 링크(react-router-dom)

- 네브바의 유저추가 버튼을 Link로 바꾸자 Link의 url주소는 to="url입력" 이다.

```react
<Link to="/adduser" className="btn btn-outline-light">유저 추가</Link>
```

- 로고제목의 a 태그도 링크로 수정

```react
<Link className="navbar-brand text-warning" to="/">
          리액트 & 스프링부트
        </Link>
```


<hr>

# AddUser 화면

- AppUser.jsx

```react
function AddUser() {
  return (
  <div className='container'>

  </div>
  )
}
```

```react
 <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">가입 하기</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              이름
            </label>
            <input type="text" id="name" className="form-control" placeholder="이름 입력" name="name" />
             <label htmlFor="name" className="form-label">
              유저네임
            </label>
            <input type="text" id="username" className="form-control" placeholder="유저네임 입력" name="username" />
 <label htmlFor="name" className="form-label">
              이메일
            </label>
            <input type="text" id="email" className="form-control" placeholder="이메일 입력" name="email" />
          </div>
        </div>
      </div>
    </div>
```

- 가입과 취소 버튼을 하단에 추가한다.

```react
     <div className="mb-3 text-center">
            <button type="submit" className="btn btn-outline-primary px-3 mx-2">
              가입
            </button>
            <button type="submit" className="btn btn-outline-danger px-3 mx-2">
              취소
            </button>
          </div>
```


- 두번째 취소 버튼은 Link로 바꾸고 주소는 "/" 기본페이지

<hr>

