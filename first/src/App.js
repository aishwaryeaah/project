import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageHeader from './component/PageHeader';
import Dashboard from './component/Dashboard';
import Learn from './LearnComponents/Learn';

function App() {
  return (
    <Router>
      <div>
        <PageHeader/>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
