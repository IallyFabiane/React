import React, { Component } from 'react'
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material'
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component='article' maxwidth='lg'>
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />  
      </Container>
    );
  }
}

function aoEnviarForm (dados) {
  console.log(dados)
}


function validarCpf(cpf) {
  if(cpf.length !== 11) {
    return { valido:false, texto: "O CPF deve ter 11 dígitos"}
  } else {
    return {valido: true, texto: ""}
  }
}

export default App;
