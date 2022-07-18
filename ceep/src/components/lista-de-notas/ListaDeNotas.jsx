import React, { Component } from 'react';
import CardNota from '../card-nota';
import "./estilo.css";

export class ListaDeNotas extends Component {
   render() {
       return (
       <ul className='lista-notas'>
         {this.props.notas.map((nota, index)=> {
           return (
            <li className='lista-notas_item' key={index}>
            <div>{nota}</div>
            <CardNota titulo={nota.titulo} texto={nota.texto} />
           </li>
           );
         })}
      </ul>
      );
   } 
}

//O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.