import React, { Component } from 'react';
import PropTypes from 'prop-types';

class City extends Component {
  render() {
    const { cidade, handleChange } = this.props;

    return (
      <fieldset>
        <legend>Você e sua cidade</legend>
        <label>
          O que você acha da sua cidade
          <textarea name="cidade" value={ cidade } onChange={ handleChange } placeholder={ !cidade.length ? 'campo inválido' : 'ok' }/>
        </label>

        <label>
          Envie uma foto sua em sua cidade
          <input type="file" />
        </label>
      </fieldset>
    );
  }
}

City.propTypes = {
  cidade: PropTypes.string,
  handleChange: PropTypes.func
}.isRequired;

export default City;
