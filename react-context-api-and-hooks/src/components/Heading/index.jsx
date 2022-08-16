import P from 'prop-types';
import { useCounterContext } from '../../contexts/CounterContext';

export const Heading = () => {
  const [state, actions] = useCounterContext();

  return <h1 style={{ fontSize: '60px', textAlign: 'center', margin: '10px' }}>{state.counter}</h1>;
};
