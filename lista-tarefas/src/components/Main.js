import { Component } from 'react';

//Form
import { FaPlus} from 'react-icons/fa';

import './Main.css';


export default class Main extends Component {
    state = { // class fields JS
      novaTarefa: '',
    }; //estado do componente


  handleChange = (e) => {
    this.setState( {
      novaTarefa: e.target.value
    });
  }

  render() {

    const { novaTarefa } = this.state;

    return(
      <div className='main'>
         <h1>{novaTarefa}</h1>
         <form action='#'>
      <input onChange={this.handleChange} type='text'></input>
      <button type='submit'><FaPlus /></button>
          </form>
      </div>
    );
  }
}
