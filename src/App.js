import React from 'react';
import './App.css';
import Player from './components/Player/Player'
import Login from "./Login";
import HeaderComponent from './HeaderComponent'
import SideBar from './SideBar'
import CertificationComponent from './CertificationComponent';
import { toast } from 'react-toastify';
toast.configure()
function App() {
  return (
    <div className="App">
        <Player/>
      <div>
        <div>
        <Login/>
        </div>
    
        <HeaderComponent/>
      </div>
     <SideBar/>
     <CertificationComponent/>
    
    </div>
  );
}

export default App;
