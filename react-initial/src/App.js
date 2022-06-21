import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard/';
import { loadPosts } from './utils/load-posts'

class App extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
    //é possível criar um componente de estado sem utilizar o constructor
  state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
    posts: [] //array de objetos em jsx: utilizamos : e não o sinal = para declarar um array
  };

async componentDidMount() { //componente de ciclo de vida. Ele será executado uma vez após o componente ser montado na tela. É um lifecyle method de montagem.Pode ser utilizado para buscar dados de uma API
  await this.loadPosts();
}

loadPosts = async () => {
  const postsAndPhotos = await loadPosts();
  this.setState({ posts: postsAndPhotos });
}

render() {
//só podemos ter um componente root dentro da página com React. Para adicionar mais um componente, devemos colocá-lo dentro do root
//precisamos inserir um Key com uma propriedade única dentro do componente-pai quando estamos utilizando o método .map()
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className='posts'>
        {posts.map(post => (
          <PostCard 
          key={post.id}
          title={post.title} 
          body={post.body}
          id={post.id}
          cover={post.cover}
          />
        ))}
        </div>
      </section>
    );
  }
} 

export default App;
