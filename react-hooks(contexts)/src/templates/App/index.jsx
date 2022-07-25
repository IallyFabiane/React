import './styles.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Posts } from '../../components/Posts'

function App() {
    return (
    <PostsProvider>
      <CounterProvider>
      <div className='container'>
        <Posts classname="posts" />
      </div>
      </CounterProvider>
    </PostsProvider>
    );
}

export default App;