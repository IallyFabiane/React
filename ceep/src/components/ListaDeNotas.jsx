import React, { Component } from 'react';
import CardNota from './CardNota';

export class ListaDeNotas extends Component {
   render() {
       return (
         <ul>
            {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index)) => {
              return (
               <li key={index}>
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
//o método de array .map() retorna uma lista contendo o conteúdo das tags li
