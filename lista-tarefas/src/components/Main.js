import { Component } from 'react';

//Form
import { FaPlus} from 'react-icons/fa';

//Tarefas

import { FaEdit, FaWindowClose} from 'react-icons/fa'

import './Main.css';


export default class Main extends Component {
    state = { // class fields JS
      novaTarefa: '',
      tarefas: []
    }; //estado do componente

  handleSubmit = (e) => { //método que captura as tarefas
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim() //eliminando os espaços do começo e do fim

    if(tarefas.indexOf(novaTarefa) !== -1) { //checando se a tarefa já existe na lista, evitando a duplicação
      return;
    }

    const novasTarefas = [...tarefas]; //lista contendo as novasTarefas

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

  handleChange = (e) => { //método que captura o valor do elemento HTML que foi setado com o evento DOM
    this.setState( {
      novaTarefa: e.target.value //captura o valor do input
    });
  }

  render() {

    const { novaTarefa, tarefas } = this.state;

    return(
      <div className='main'>
         <h1>Lista de Tarefas</h1>
         <form onSubmit={this.handleSubmit} action='#' className='form'>
           <input onChange={this.handleChange} type='text' value={novaTarefa}></input>
           <button type='submit'><FaPlus /></button>
          </form>
          <ul className='tarefas'>
            {tarefas.map(tarefa => (<li key={tarefa}>
              {tarefa}
              <span>
                <FaEdit className='edit'/>
                <FaWindowClose className='delete'/>
              </span>
              </li>))}
          </ul>
      </div>
    );
  }
}
