import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Camera from '../components/Camera';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Camera></Camera>
      </div>
    );
  }
}

export default App;
