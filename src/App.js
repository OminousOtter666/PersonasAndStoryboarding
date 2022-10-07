import React  from 'react';
import "./App.css";
import Interface from "./components/Interface";
import Interviews from "./components/Interviews";
import Personas from "./components/Personas";
import Storyboard from "./components/Storyboard";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <div className="nav-item nav-title">Personas and Storyboarding</div>
        <div className="navbar-routes">
          <div className="nav-item nav-button">Interface</div>
          <div className="nav-item nav-button">Interviews</div>
          <div className="nav-item nav-button">Personas</div>
          <div className="nav-item nav-button">Storyboard</div>
        </div>
      </div>
      <div className="app-body">
        <div className='app-inters'>
        <Interface />
        <Interviews />
        </div>
        <Personas />
        <Storyboard id="storyboard"/>
        
      </div>
    </div>
  );
}

export default App;
