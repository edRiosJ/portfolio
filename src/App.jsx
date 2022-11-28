import React from 'react';
import Home from './pages/home/Home.jsx';
import Footer from './components/containers/footer/Footer.jsx';
import NavBar from './components/containers/navBar/NavBar.jsx';
import LanguageState from './context/language/LanguageState.jsx';
import ScrollState from './context/scroll/ScrollState.jsx';
import ThemeState from './context/theme/ThemeState.jsx';
import './App.css';

function App()
{
  return (
    <ScrollState>
      <ThemeState>
        <LanguageState>
          <div className="app">
            <NavBar />
            <Home />
            <Footer />
          </div>
        </LanguageState>
      </ThemeState>
    </ScrollState>
  );
}

export default App;
