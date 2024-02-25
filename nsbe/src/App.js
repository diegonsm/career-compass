import React from 'react';
import Landing from './components/landing';
import List from './components/list';
import Event from './components/event';
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
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
