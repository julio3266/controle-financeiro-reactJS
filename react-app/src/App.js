import React from 'react';
import NavBar from './Components/NavBar'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
