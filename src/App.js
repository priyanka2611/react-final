import React from 'react';
import './App.css';
import Player from './components/Player'
import Login from "./Login";
import HeaderComponent from './HeaderComponent'
import SideBar from './SideBar'
import CertificationComponent from './CertificationComponent'
function App() {
  return (
    <div className="App">
        <Player/>
      <div>
        <Login/>
        <HeaderComponent/>
      </div>
     <SideBar/>
     <CertificationComponent/>
    
    </div>
  );
}

export default App;
