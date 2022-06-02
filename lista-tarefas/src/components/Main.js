import { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas'

export default class Main extends Component {
    state = { // class fields JS
      novaTarefa: '',
      tarefas: [],
      index: -1 //se o index for = -1 quer dizer que não há nada sendo editado
    }; //estado do componente

componentDidMount(){ //será executado uma vez assim que o componente for montado
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));//transformando a string em objeto
  if(!tarefas) return;
  this.setState({tarefas});//setando  estado de tarefas
}

componentDidUpdate(prevProps, prevState){ //PARA A ATUALIZAÇÃO DOS COMPONENTES
  const { tarefas } = this.state;
  if(tarefas === prevState.tarefas) return; //retornando o estado prévio das tarefas
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); //salvando no localStorage na forma de string
}

  handleSubmit = (e) => { //método que captura as tarefas
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim() //eliminando os espaços do começo e do fim

    if(tarefas.indexOf(novaTarefa) !== -1) { //checando se a tarefa já existe na lista, evitando a duplicação
      return;
    }

    const novasTarefas = [...tarefas]; //lista contendo as novasTarefas

    if(index == -1){ //nada sendo editado
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '' //limpando o input após a adição de uma novaTarefa
      })
    } else { //algo sendo editado
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa; //novaTarefa assume o valor no índice que está sendo editado

      this.setState({ //setando o estado como finalizada a edição
        tarefas: [...novasTarefas],
        index: -1
      })
    }

  }

  handleChange = (e) => { //método que captura o valor do elemento HTML que foi setado com o evento DOM
    this.setState( {
      novaTarefa: e.target.value //captura o valor do input
    });
  }

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index]
    })
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state; //capturando as tarefas
    const novasTarefas = [...tarefas]; //com o spread operator inserindo as tarefas no array novasTarefas
    novasTarefas.splice(index, 1); //removendo no índice escolhido 1 elemento
    this.setState({
      tarefas: [...novasTarefas] //setando o state para que tarefas receba a lista de novasTarefas
    });
  }

  render() {

    const { novaTarefa, tarefas } = this.state;

    return(
      <div className='main'>
         <h1>Lista de Tarefas</h1>
         < Form
         handleSubmit={this.handleSubmit}
         handleChange={this.handleChange}
         novaTarefa={novaTarefa}
         />
        <Tarefas
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
