import React, { Component, useContext } from 'react'
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material'
import 'fontsource-roboto';
import { validarCpf, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro'

class App extends Component {
  render() {
    return (
      <Container component='article' maxwidth='lg'>
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCpf, senha: validarSenha, nome: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm (dados) {
  console.log(dados)
}


export default App;
