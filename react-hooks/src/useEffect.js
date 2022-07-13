import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './useState.css';
const eventFn = () => {
  console.log('h2 clicado');
};
function UseEffect() {
  const [counter, setCounter] = useState(0);
  //executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('ComponentDidUpdate');
  });
  //executa uma vez, para isso usamos um array vazio, sem dependências
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);
  //com dependência- executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para', counter);
  }, [counter]);
  //simulando o ComponentDidUnmount
  useEffect(() => {
    document.querySelector('h2').addEventListener('click', eventFn);
    //ComponentWillUnmount - limpeza
    return () => {
      document.querySelector('h2').removeEventListener('click', eventFn);
    };
  }, []);
  return (
    <div className="App">
      <h2 className="App-header title">Contador: {counter} </h2>
      <button className="button-app" onClick={() => setCounter(counter + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

export default UseEffect;
