import React, { Component } from 'react';
import Country from './Country';
import City from './City';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      regiao: '',
      nacionalidade: false,
      nome: '',
      idade: 0,
      cidade: '',
      formularioComErros: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleError = () => {
    const { nome, idade, cidade } = this.state;

    const errorCases = [!nome.length, !idade.length, !cidade.length];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }, () => { this.handleError() });
  }

  render() {
    const { nome, idade, cidade, formularioComErros } = this.state;

    return (
      <>
        <h1>Formulário</h1>

        <form>
          <Country handleChange={ this.handleChange } nome={ nome } idade={ idade }/>
          <City handleChange={ this.handleChange } cidade={ cidade }/>
        </form>

        { formularioComErros
            ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
            : <span style={ { color: 'green' } }>Todos os campos foram preenchidos</span> }
      </>
    );
  }
}

export default Form;
