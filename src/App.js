import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/HomePage/HomePage.component.jsx";

const HatsPage= ()=><h1> HATSssssssssssssss</h1>

function App() {
  return (
    <div className="App">
      <Switch>
         <Route exact path="/" component={HomePage} />
          <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
