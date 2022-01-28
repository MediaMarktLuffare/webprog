import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Component } from 'react';
import inventory from './inventory.ES6';
import ComposeSalad from './ComposeSalad';

function App() {
  return (
  <div className="container py-4">
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Sallads Bar</span>
    </header>

    <ComposeSalad inventory={inventory} />
    
    <footer className="pt-3 mt-4 text-muted border-top">
      EDAF90 - webprogrammering
    </footer>

  </div>

  );
}

export default App;
