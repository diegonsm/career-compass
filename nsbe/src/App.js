import React from 'react';
import Landing from './components/landing';
import List from './components/list';
import Event from './components/event';
import Org from './components/org';
import Scholarship from './components/scholarship';
import Job from './components/job';
import Header from './components/header'; // Import the Header component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />

          <Route 
            path="/list"
            element={<List />}
          />

          <Route 
            path="/event"
            element={<Event />}
          />

          <Route 
            path="/job"
            element={<Job />}
          />

          <Route 
            path="/org"
            element={<Org />}
          />  

          <Route 
            path="/scholarship"
            element={<Scholarship />}
          />  
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
