import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
  constructor(props) { //oconstructor no React recebe props
    super(props);
    this.handlePClick = this.handlePClick.bind(this); //handlePClick agora pode acessar this
    this.state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
      name: 'Ially Fabiane',
      counter: 0
    };
  }

  handlePClick() { //modificando o estado do componente de classe App após a chamada do método handlePClick()
      this.setState({name: 'Full Stack Developer Junior'})
  }

  handleAClick = (event) => { //acesssando o this do componente de classe App sem utilizar o método bind()
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1})
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui:
          </a>
        </header>
      </div>
    );
  }
}
  

export default App;
