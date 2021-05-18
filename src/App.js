import React, { useState } from 'react';
import Result from './components/Result'

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "app darkbg1" : "app lightbg1"}>
      {/* header */}
      <div className="app__container">
        <div className="header">
          <div className="header__logo">
            <h1 className={darkMode ? "darkText2" : "lightText1"}>Job <span style={{ color: "#f2a365" }}>Hunter</span> </h1>
          </div>
          <div className="header__switch">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
        </div>
        {/* result */}
        <Result darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
