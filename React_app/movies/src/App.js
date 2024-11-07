import React from 'react';
import './App.css';
import Navi from './components/side_bar/navigation';
import TopBar from './components/TopBar/header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <TopBar />
      <Navi />
    </div>
  );
}

export default App;
