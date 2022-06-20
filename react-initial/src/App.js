import './App.css';
import { Component } from 'react';

class App extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
    //é possível criar um componente de estado sem utilizar o constructor
  state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
    posts: [] //array de objetos em jsx: utilizamos : e não o sinal = para declarar um array
  };

componentDidMount() { //componente de ciclo de vida. Ele será executado uma vez após o componente ser montado na tela. É um lifecyle method de montagem.Pode ser utilizado para buscar dados de uma API
  this.loadPosts();
}

loadPosts = async () => {
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts'); // usando a fetch api nativa do navegador para fazer requisições
  const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);//retornando um array de promessas
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  const postsAndPhotos = postsJson.map((post, index) => {
    return({...post, cover: photosJson[index].url})
  })
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
        <div className='post'>
          <img src={post.cover} alt= {post.title}/>
          <div key={post.id} className= 'post-content'> 
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </div>
        ))}
      </div>
      </section>
    );
  }
} 

export default App;

