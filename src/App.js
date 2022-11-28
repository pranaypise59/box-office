import React from 'react';
import Home from './pages/Home';
import Starred from './pages/Starred';
import './App.css';
import RenderMainScreen from './components/RenderMainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Box-Show</h1>
      <p>Get to know about your favorite show and actressess</p>
      <Routes>
        <Route exact path='/' element={RenderMainScreen(<Home />)} />
        <Route exact path='/starred' element={RenderMainScreen(<Starred />)} />
      </Routes>
    </Router>
  );
}
export default App;
