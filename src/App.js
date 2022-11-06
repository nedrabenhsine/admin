import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Calender from './views/WildDays/Calender';
import ListdesCongés from './views/WildDays/ListdesCongés';
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
        <Routes>
          {userToken ?
            <>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/Calender' element={<Calender />} />
              <Route path='/ListdesCongés' element={<ListdesCongés />} />
              <Route path='/employers' element={<Employers />} />
              <Route path='/departments' element={<Departments />} />
              <Route path='/updatedep/:id' element={<Updatedepart />} />
              <Route path='/permissions' element={<Permissions />} />
              <Route path='/remote' element={<Remote />} />
              <Route path='/jobs' element={<Jobs />} />
              <Route path='/candidacy' element={<Candidacy />} />
            </>
            :
            <Route path='/' element={<Login />} />
          }
        </Routes>
      </Router>

    </div>
  );
}

export default App;
