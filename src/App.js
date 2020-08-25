import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import Stage from './stage';


function App(props) {
  return (
    <div className="App">
      <Stage storeParticipants={props.store}/>
    </div>
  );
}

export default App;
