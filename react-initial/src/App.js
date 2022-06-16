import './App.css';
import { Component } from 'react';

class App extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
    //é possível criar um componente de estado sem utilizar o constructor
  state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
    counter: 0,
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

timeOutUpdate = null;

componentDidMount() { //componente de ciclo de vida. Ele será executado uma vez após o componente ser montado  na tela. É um lifecyle method de montagem
    this.handleTimeOut();
}

componentDidUpdate() { //componente de ciclo de vida. É um lifecycle method de atualização.
  this.handleTimeOut();
}

componentWillUnmount() {//componente de ciclo de vida. É um lifecucle method de deesmontagem.
  clearTimeout(this.timeOutUpdate);// com o clearTimeOut é realizada a 'limpeza' na tela
}

handleTimeOut = () => {
    const { posts, counter } = this.state
    posts[0].title = 'O título mudou';

    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 3000);
}

render() {
//só podemos ter um componente root dentro da página com React. Para adicionar mais um componente, devemos colocá-lo dentro do root
//precisamos inserir um Key com uma propriedade única dentro do componente-pai quando estamos utilizando o método .map()
    const { posts, counter } = this.state;

    return (
      <div className='App'>
        <h2>{counter}</h2>
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

