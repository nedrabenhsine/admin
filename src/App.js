import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
  return (
    <div>
      <Router forceRefresh={true} >
        <Switch>
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/wliddays' component={WildDays} />
          <Route path='/employers' component={Employers} />
          <Route path='/departments' component={Departments} />
          <Route path='/updatedep/:id' component={Updatedepart} />
          <Route path='/permissions' component={Permissions} />
          <Route path='/remote' component={Remote} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/candidacy' component={Candidacy} />

          <Route path='/' component={Login} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
