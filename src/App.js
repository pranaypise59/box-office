import React from 'react';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import './App.css';
import RenderMainScreen from './components/RenderMainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={RenderMainScreen(<Home />)} />
        <Route exact path='/starred' element={RenderMainScreen(<Starred />)} />
        <Route exact path='/show/:id' element={<Show />} />
        <Route path='*' element={<div>Not Found</div>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
