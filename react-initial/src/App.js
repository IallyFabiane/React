import './App.css';
import { Component } from 'react';

class App extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
    //é possível criar um componente de estado sem utilizar o constructor
  state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
      posts: [ //array de objetos em jsx: utilizamos : e não o sinal = para declarar um array
        {
          id: 1,
          title: 'título 1',
          body: 'corpo 1'
        },
        {
          id: 2,
          title: 'título 2',
          body: 'corpo 2'
        },
        {
          id: 3,
          title: 'título 3',
          body: 'corpo 3'
        }
      ]
  };

render() {
//só podemos ter um componente root dentro da página com React. Para adicionar mais um componente, devemos colocá-lo dentro do root
//precisamos inserir um Key com uma propriedade dentro do componente-pai quando estamos utilizando o método .map()
    const { posts } = this.state;

    return (
      <div className='App'>
        {posts.map(post => (
          <div key={post.id}> 
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
} 

export default App;
