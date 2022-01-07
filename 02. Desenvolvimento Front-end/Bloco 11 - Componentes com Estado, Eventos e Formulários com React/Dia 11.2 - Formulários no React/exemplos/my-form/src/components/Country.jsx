import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Country extends Component {
  render() {
    const { regiao, nacionalidade, nome, idade, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Quem é você?</legend>
        <label>
          De qual região do país você é?
          <select name="regiao" value={ regiao } onChange={ handleChange }>
            <option value="Norte">Norte</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Centro-Oeste">Centro-Oeste</option>
            <option value="Sudeste">Sudeste</option>
            <option value="Sul">Sul</option>
          </select>
        </label>

        <label>
          Você é brasileiro?
          <input type="checkbox" name="nacionalidade" value={ nacionalidade } onChange={ handleChange } />
        </label>

        <label>
          Qual é o seu nome?
          <input type="text" name="nome" value={ nome } onChange={ handleChange } placeholder={ !nome.length ? 'campo inválido' : 'ok' } />
        </label>

        <label>
          Qual é a sua idade?
          <input type="number" name="idade" value={ idade } onChange={ handleChange } placeholder={ !idade.length ? 'campo inválido' : 'ok' }/>
        </label>
      </fieldset>
    );
  }
}

Country.propTypes = {
  regiao: PropTypes.string,
  nacionalidade: PropTypes.string,
  nome: PropTypes.string,
  idade: PropTypes.string,
  handleChange: PropTypes.func
}.isRequired;

export default Country;
