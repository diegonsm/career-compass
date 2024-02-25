import React from 'react';
import Landing from './components/landing';
import List from './components/list';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />

        <Route 
          path="/list"
          element={<List />}
        />
      </Routes>
      {/* <Landing /> */}
    </Router>
  );
}

export default App;
