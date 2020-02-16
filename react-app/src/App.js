import React from 'react';
import Principal from './Pages/Principal'
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
