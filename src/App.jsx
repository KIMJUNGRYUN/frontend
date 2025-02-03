import Navbar from './layout/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';

function App() {
  

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
