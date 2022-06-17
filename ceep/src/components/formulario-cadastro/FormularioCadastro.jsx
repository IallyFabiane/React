import React, { Component } from 'react';
import "./estilo.css";

export class FormularioCadastro extends Component {

  constructor() {
    super();
    this.titulo = '';
    this.texto = '';
  }

  _handleMudancaDeTitulo (evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value
  }

  _handleMudancaDeTexto (evento) {
    evento.stopPropagation();
    this.texto = evento.target.value
  }

  _criarNota (evento) {
    evento.preventDefault();
    evento.stopPropagation();
    console.log(`Uma nova nota foi criada ${this.titulo} ${this.texto}`)
  }

    render () {
    return (
        <form className="form-cadastro"
          onSubmit={this._criarNota.bind(this)}
        >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaDeTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaDeTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
    };
}
