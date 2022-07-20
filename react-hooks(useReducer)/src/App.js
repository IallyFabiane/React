/* eslint-disable default-case */
import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }

  console.log('NENHUMA ACTION ENCONTRADA...');
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  // eslint-disable-next-line no-unused-vars
  const { counter, title, body } = state;

  return (
    <div className='container'>
      <h1>
        {title}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>
        without action
      </button>
    </div>
  );
}

export default App;