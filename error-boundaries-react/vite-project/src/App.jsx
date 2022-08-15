import { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const s = {
  style: {
    fontSize: '30px',
    display: 'block',
    margin: '20px auto',
    backgroundColor: 'purple',
    color: 'white',
    border: 'none',
    padding: '20px',
    borderRadius: '5px'
  }
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para que a próxima renderização mostre a UI alternativa.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
   // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <h1 style={{ color: 'crimson'}}>Algo deu errado 😞</h1>;
    }

    return this.props.children; 
  }
};

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect( () => {
    if(counter > 10) {
      throw new Error('INFELIZMENTE OCORREU UM ERRO!!');
    }
    
  }, [counter])

  return(
    <div>
        <button {...s} onClick={ () => setCounter(counter + 1)}>Click to increase {counter}</button>
    </div>
  )
}

const Home = () => {
  return (
  <div>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>
      <ErrorBoundary>
        <ItWillThrowError />
      </ErrorBoundary>  
  </div>
  );
}

export default Home;