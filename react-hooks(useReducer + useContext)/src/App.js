import P from 'prop-types';
import { createContext, useReducer, useContext, useRef } from 'react';
import './App.css';

export const actions = {
  CHANGE_TITLE:'CHANGE_TITLE',
};

export const globalState = { //objeto complexo contendo o estado global
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

export const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar título');
      return {...state, title: action.payload}
    }
  }
   return {...state};
}

export const Context = createContext(); //criando o contexto
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

 const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload })
  }

   return ( 
   <Context.Provider value={{ state, changeTitle }}>
     { children }
   </Context.Provider>
   );
}

AppContext.propTypes = { //renderizando any types
   children: P.node
}

export const H1 = () => { 
  const context = useContext(Context);
  const inputRef = useRef();
  
  return (
    <>
      <h1 onClick={ () => context.changeTitle(inputRef.current.value) }>{context.state.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
}

function App() {
  return ( //payload significa os dados que eu quero passar para o novo estado
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;