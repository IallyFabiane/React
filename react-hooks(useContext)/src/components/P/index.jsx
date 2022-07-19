import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';
// eslint-disable-next-line
export const P = () => {
    const theContext = useContext(GlobalContext);
    const {
      contextState: { body, counter },
      setState,
    } = theContext;
    return (
      <p
        onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))} //spread operator para espalhar os estados anteriores
      >
        {body} {counter}
      </p>
    );
  };