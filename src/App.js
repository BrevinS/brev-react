import React from 'react';
import About from './pages/about';
import Home from './pages/index';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      </Routes>
    </Router>
  );
}

export default App;
