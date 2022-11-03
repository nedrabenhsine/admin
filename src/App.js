import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import WildDays from './views/WildDays';
import Login from './views/Login';
import Employers from './views/Employers';
import Departments from './views/Departments';
import Remote from './views/Remote';
import Permissions from './views/Permissions';
import Jobs from './views/Jobs';
import Updatedepart from './views/Departments/Updatedepart';
import Candidacy from './views/Candidacy';
function App() {
  const userToken = localStorage.getItem('token');
  return (
    <div>
      <Router forceRefresh={true} >
        {userToken ?
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/wliddays' element={<WildDays />} />
            <Route path='/employers' element={<Employers />} />
            <Route path='/departments' element={<Departments />} />
            <Route path='/updatedep/:id' element={<Updatedepart />} />
            <Route path='/permissions' element={<Permissions />} />
            <Route path='/remote' element={<Remote />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/candidacy' element={<Candidacy />} />
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>

        }
      </Router>

    </div>
  );
}

export default App;
