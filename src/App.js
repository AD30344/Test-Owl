import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
function App(props) {
  return (
    <div className="App">
      <List storeParticipants ={props.store}/>
    </div>
  );
}

export default App;
