import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import {robots} from './robots';

class App extends Component {
  render() {
    return (

      <div className="App">
          {
              robots.map((robot, i) => {
                  return <Card id={i} robot={robot}/>
              })
          }

      </div>
    );
  }
}

export default App;
