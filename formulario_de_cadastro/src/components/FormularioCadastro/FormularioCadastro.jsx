import { React, useState, useEffect } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { Stepper, Typography, Step, StepLabel} from '@mui/material';

function FormularioCadastro ({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({})
    useEffect( () => {
        if (etapaAtual === formularios.length-1) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [<DadosUsuario aoEnviar={coletarDados}  />, <DadosPessoais aoEnviar={coletarDados} />, <DadosEntrega aoEnviar={coletarDados}  />,
    <Typography variant="h5" color="secondary">Obrigado pelo cadastro!</Typography>]

    function coletarDados (dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo (dados) {
        setEtapaAtual(etapaAtual+ 1) 
    }

    return <> 
    <Stepper activeStep={etapaAtual} >
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Dados Pessoais</StepLabel></Step>
        <Step><StepLabel>Dados de Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]} 
    </>;
    
}

export default FormularioCadastro;
            
            
