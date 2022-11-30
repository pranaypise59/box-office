import React from 'react';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import './App.css';
import RenderMainScreen from './components/RenderMainScreen';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = {
    mainColors: {
      blue: '#2400ff',
      gray: '#c6c6c6',
      dark: '#353535',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/' element={RenderMainScreen(<Home />)} />

          <Route
            exact
            path='/starred'
            element={RenderMainScreen(<Starred />)}
          />
          <Route exact path='/show/:id' element={<Show />} />
          <Route path='*' element={<div>Not Found</div>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;
