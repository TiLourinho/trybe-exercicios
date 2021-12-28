// import logo from './logo.svg';
import React from 'react'
import './App.css';

const Task = (element) => {
  return (
    <li>{element}</li>
  );
};

const tasks = ['Estudar', 'Jogar', 'Descansar', 'Cozinhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((elem) => Task(elem)) }</ul>
    );
  }
}

export default App;
