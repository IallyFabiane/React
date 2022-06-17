import React, { Component } from 'react';
import CardNota from '../card-nota/CardNota';
import "./estilo.css";

export class ListaDeNotas extends Component {
   render() {
       return (
       <ul className='lista-notas'>
         {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index)=> {
           return (
            <li className='lista-notas_item' key={index}>
            <div>{categoria}</div>
            <CardNota />
           </li>
           );
         })}
      </ul>
      );
   } 
}

//O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos.
