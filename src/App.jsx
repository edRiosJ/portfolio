import React from 'react';
import Home from './pages/home/Home.jsx';
import NavBar from './components/containers/navBar/NavBar.jsx';
import './app.css';

function App()
{
  return (
    <div className="app">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
