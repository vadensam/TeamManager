import React from 'react';
import './App.css';
import {Router, Link} from '@reach/router'
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import Status from './components/Status';

function App() {
  return (
    <div className="container">
      <nav className="text-center">
        <h2><Link to='/players/list'  className="nav-item"> Manage Players</Link> | <Link to="/players/status">Manage Player Status</Link></h2>
      </nav>

        <Router>
          <Dashboard path='/players/list' default />
          <Form path='/players/new' action='create'/>
          <Status path='/players/status'/>

        </Router>
    </div>
  );
}

export default App;
