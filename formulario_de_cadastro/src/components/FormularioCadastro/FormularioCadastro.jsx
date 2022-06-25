import React, {useState} from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro ({aoEnviar, validarCpf}) {
    const [nome, setNome] = useState(""); //hook. O índice 0 do array é o valor do estado atual e o índice 1 é o nome da função que altera o estado
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido: true, texto:""}})
    return(
        <form onSubmit={ event => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, promocoes, novidades})//recebendo props
            }}>
            <TextField 
            value={nome}
            onChange={ event => {
                setNome(event.target.value);
            }}
            variant='outlined' 
            color='secondary'
             margin='normal' 
             fullWidth id='NOME' 
             label='NOME'/>

            <TextField 
            value={sobrenome}
            onChange={ event => {
                 setSobrenome(event.target.value);
            }}
            variant='outlined'
            color='secondary' 
            margin='normal'
            fullWidth 
            id='SOBRENOME' 
            label='SOBRENOME'/>

            <TextField 
            value={cpf}
            onChange={ event => {
                 setCpf(event.target.value);
            }}
            onBlur={event => {
                const ehValido = validarCpf(cpf)
                setErros({cpf: ehValido})
            }}
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
            control={<Switch onChange={event => { setPromocoes(event.target.checked)}} name='promoções' defaultchecked={promocoes} color='secondary'/>}/>

            <FormControlLabel 
            label='novidades' 
            checked={novidades}
            control={<Switch onChange={event => { setNovidades(event.target.checked)}} name='novidades' defaultchecked={novidades} color='secondary'/>}/>

            <Button
            variant='contained' 
            type='submit'
            color='secondary'>
                Cadastrar
            </Button>
        </form>
    );
}

export default FormularioCadastro;