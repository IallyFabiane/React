import React, {useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../context/ValidacoesCadastro'
import useErros from '../../hooks/useErros';

function DadosPessoais ({aoEnviar}) {
    const [nome, setNome] = useState(""); //hook. O índice 0 do array é o valor do estado atual e o índice 1 é o nome da função que altera o estado
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes)
    
    return(
        <form onSubmit={ event => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})//recebendo props
            }
            
            }}>
            <TextField 
            value={nome}
            onChange={ event => {
                setNome(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.nome.valido}
            helperText={erros.nome.texto}
            variant='outlined' 
            name="nome"
            color='secondary'
            margin='normal' 
            fullWidth id='NOME' 
            label='NOME'/>

            <TextField 
            value={sobrenome}
            onChange={ event => {
                 setSobrenome(event.target.value);
            }}
            name="sobrenome"
            variant='outlined'
            color='secondary' 
            margin='normal'
            fullWidth 
            id='SOBRENOME' 
            label='SOBRENOME'/>

            <TextField 
            value={cpf}
            name="cpf"
            onChange={ event => {
                 setCpf(event.target.value);
            }}
            onBlur={validarCampos}
            error={!erros.cpf.valido} //propriedade error, para validação(mui)
            helperText={erros.cpf.texto} //utilizado para dar dicas ao usuário da aplicação (mui)
            variant='outlined'
            color='secondary'
            margin='normal' 
            fullWidth 
            id='CPF' 
            label='CPF'/>

            <FormControlLabel 
            label='promocoes' 
            checked={promocoes}
            control={<Switch onChange={event => { setPromocoes(event.target.checked)}} name='promoções' defaultChecked={promocoes} color='secondary'/>}/>

            <FormControlLabel 
            label='novidades' 
            checked={novidades}
            control={<Switch onChange={event => { setNovidades(event.target.checked)}} name='novidades' defaultChecked={novidades} color='secondary'/>}/>

            <Button
            variant='contained' 
            type='submit'
            color='secondary'>
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;