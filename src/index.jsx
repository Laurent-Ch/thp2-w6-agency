import { React, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.scss'; 
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';
import Navbar from 'components/Navbar/Navbar';
import DarkModeContext from 'contexts/DarkmodeContext';
import DarkModeButton from 'components/DarkModeButton/DarkModeButton';

const App = () => {

  const [darkmode, setDarkMode] = useState(false);

  return (
    <div className={darkmode ? "page-container dark" : "page-container light"}>
      <DarkModeContext.Provider value={{ 
        darkmode, 
        toggle: () => setDarkMode(!darkmode)
      }}>
        <DarkModeButton />
        <Router>
          <Navbar />
            <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/works" element={<Works />} />
              </Routes>
          </main>
        </Router>
      </DarkModeContext.Provider>
  </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));