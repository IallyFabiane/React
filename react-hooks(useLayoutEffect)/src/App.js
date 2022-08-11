import { useLayoutEffect } from "react";
import { useState, useRef } from "react";

const App = () => {
  const [counted, setCounted] = useState([0, 1,2 ,3 ,4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while(Date.now() < now + 100);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  })
  //setCounted retorna o último valor do array + 1. O sinal de + a frente do c é para converter o valor que retorna do método slice em Number
  const handleClick = () => {
    setCounted(c => [...c, +c.slice(-1) + 1]);
  }

  return (
    <>
      <button onClick={handleClick} style={{ margin: '10px'}}>Count {counted.slice(-1)}</button> 
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll', margin: '10px'}}>
        {counted.map(c => {
          return <p key={`c-${c}`}>{c}</p>
        }
        )}
      </div>
    </>
  )
}

export default App;