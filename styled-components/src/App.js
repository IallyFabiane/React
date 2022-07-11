/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { GolbalStyle } from "./Components/GlobalStyle";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { ThemeProvider } from 'styled-components';
import { temaClaro, temaEscuro } from './Components/UI/temas';
import { BtnTema } from './Components/UI'
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);
  const toggleTema = () => {
    setTema(tema => !tema);
  }

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GolbalStyle />
      <BtnTema onClick={toggleTema}>
          <SwitcherTema tema={tema} />
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
