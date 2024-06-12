import React, { useState } from 'react';
import 'App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackgroundColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple app to demonstrate background color toggling.</p>
      </header>
      <main>
        <section>
          <h2>Section 1</h2>
          <p>Content for section 1 goes here.</p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>Content for section 2 goes here.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
      <button onClick={toggleBackgroundColor}>
        Toggle Background Color
      </button>
    </div>
  );
}

export default App;
