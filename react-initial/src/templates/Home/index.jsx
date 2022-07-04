import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'

class Home extends Component { //componente react. Para escrever um código JavaScript em JSX usamos um par de chaves {} e escrevemos o códgio dentro
    //é possível criar um componente de estado sem utilizar o constructor
  state = {  //criando o estado para a classe. O estado corresponde a um objeto que contém os dados do componente que serão renderizados a partir da função render()
    posts: [], //array de objetos em jsx: utilizamos : e não o sinal = para declarar um array
    allPosts: [],
    page: 0,
    postsPerPage: 2,
    searchValue:''
  };

componentDidMount() { //componente de ciclo de vida. Ele será executado uma vez após o componente ser montado na tela. É um lifecyle method de montagem.Pode ser utilizado para buscar dados de uma API
  this.loadPosts();
}

loadPosts = async () => {
  const { page, postsPerPage } = this.state
  const postsAndPhotos = await loadPosts();
  this.setState({ 
    ...this.state,
    posts: postsAndPhotos.slice(page, page + postsPerPage),
    allPosts: postsAndPhotos
  });
}

loadMorePosts = () => {
  const {
   page,
   postsPerPage,
   allPosts,
   posts
  } = this.state

  const nextPage = posts + postsPerPage;
  const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
  posts.push(...nextPosts);

  this.setState({ ...this.state, posts, page: nextPage})
}

handleChange = (e) => {
  const {value} = e.target;
  this.setState({...this.state, searchValue: value })
}

render() {
//só podemos ter um componente root dentro da página com React. Para adicionar mais um componente, devemos colocá-lo dentro do root
//precisamos inserir um Key com uma propriedade única dentro do componente-pai quando estamos utilizando o método .map()
    const { posts, page, postsPerPage, allPosts, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;
    const filteredPosts = !!searchValue ? allPosts.filter(post => { //condição de filtragem os posts
      return post.title.toLowerCase().includes(searchValue.toLocaleLowerCase());
    }): posts;
    return (
      <section className='container'> 
      <div className='search-container'>
        {!!searchValue && (
            <h1>Search value: {searchValue}</h1>
        )} 

        <TextInput searchValue={searchValue} actionFn={this.handleChange} /> 
        
        </div>

        {filteredPosts.length > 0 && ( //condição de renderização dos posts
          <Posts posts={filteredPosts} />
        )}

         {filteredPosts.length === 0 && ( //caso não renderize
          <p>Não existem posts</p>
        )}

        <div className='button-container'>
        {!searchValue && (
            <Button
            disabled={noMorePosts}
            text="Load more posts"
            onClick={this.loadMorePosts}
            />
        )}
        </div>
      </section>
    );
  }
} 

export default Home;
