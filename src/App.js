import React from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/portfolio'
          element={<Portfolio />}
        />
        
      </Routes>
    </Router>
  );
}

export default App;