import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    counter: 0
  }

  handleClick = () => { //setState recebendo duas funções de callback como parâmetros
    this.setState(
      (prevState, prevProps) => {
        console.log('prev: ', prevState.counter);
        return {counter: prevState.counter + prevProps.numberToIncrement}
      },
      () => {
        console.log('post: ', this.state.counter)
      }
    )
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={this.handleClick}>
         counter = {this.state.counter}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}
export default App;
