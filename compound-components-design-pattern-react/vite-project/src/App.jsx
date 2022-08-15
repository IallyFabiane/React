// Compound Components
import { Children, cloneElement, useState } from 'react';

const s = {
  style: {
    fontSize: '40px',
    margin: '10px',
    padding: '10px',
    color: '#003049',
  }
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};
const TurnedOn = ({ isOn, children }) => (isOn ? children : null);
const TurnedOff = ({ isOn, children }) => (isOn ? null : children);
const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};
const P = ({ children }) => <p {...s}>{children}</p>;

const Home = () => {
  return (
    <TurnOnOff>
      <TurnedOn>
        <P>Status: 'Online'.</P>
      </TurnedOn>
      <TurnedOff>
        <P>Status: 'Offline'.</P>
      </TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
};


export default Home;
