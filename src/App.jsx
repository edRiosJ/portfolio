import React from 'react';
import Home from './pages/home/Home.jsx';
import Footer from './components/containers/footer/Footer.jsx';
import NavBar from './components/containers/navBar/NavBar.jsx';
import ScrollState from './context/scroll/ScrollState.jsx';
import './App.css';

function App()
{
  return (
    <ScrollState>
      <div className="app">
        <NavBar />
        <Home />
        <Footer />
      </div>
    </ScrollState>
  );
}

export default App;
