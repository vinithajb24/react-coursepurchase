import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Coursesales from './coursesales';

class App extends Component {
  render(){
    var courses = [
      { name: 'Complete iOS10 dev course', price: 199 },
      { name: 'Complete pentesting course', price: 299 },
      { name: 'Complete front end dev course', price: 180 },
      { name: 'Bug Bounty and web app pentesting', price: 190 },

    ];
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Course Purchase pages</h2>
        
      </div>
      <Coursesales items={courses} />
    </div>
  );
}
}

export default App;
