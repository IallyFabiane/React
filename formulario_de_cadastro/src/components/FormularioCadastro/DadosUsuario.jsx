import React, { useState, useContext } from 'react';
import { TextField, Button } from "@mui/material";
import  ValidacoesCadastro from '../../context/ValidacoesCadastro'
import useErros from '../../hooks/useErros';

function DadosUsuario ({aoEnviar}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const validacoes = useContext(ValidacoesCadastro);
    useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={ (event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField 
            value={email}
            onChange={ (event)=> {
                setEmail(event.target.value)
            }}
            name="email"
            id="email" 
            label="email" 
            type="email" 
            variant="outlined" 
            margin="normal" 
            fullWidth required 
            />

            <TextField 
             value={senha}
             onChange={ (event)=> {
                 setSenha(event.target.value)
             }}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            onBlur={validarCampos}
            name="senha"
            id="senha" 
            label="senha"
            type="password" 
            variant="outlined" 
            margin="normal" 
            fullWidth required />

            <Button 
            type="submit" 
            variant="contained" 
            color="secondary">
                Cadastrar
            </Button>

        </form>
    );
}

export default DadosUsuario;