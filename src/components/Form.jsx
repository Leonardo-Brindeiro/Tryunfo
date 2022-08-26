import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // *hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="name">
          Name:
          <input
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            id="name"
            data-testid="name-input"
            type="text"
          />
        </label>
        descrição:
        <label htmlFor="descrição">
          <textarea
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            id="descrição"
            data-testid="description-input"
            type="textarea"
          />
        </label>
        <label htmlFor="atrib">
          Attr01:
          <input
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            id="atrib"
            data-testid="attr1-input"
            type="number"
          />
        </label>
        <label htmlFor="atrib1">
          Attr02:
          <input
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            id="atrib1"
            data-testid="attr2-input"
            type="number"
          />
        </label>
        <label htmlFor="atrib2">
          Attr03:
          <input
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            id="atrib2"
            data-testid="attr3-input"
            type="number"
          />
        </label>
        <label htmlFor="atrib3">
          Imagem:
          <input
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            id="atrib3"
            data-testid="image-input"
            type="text"
          />
        </label>
        <label htmlFor="atrib4">
          <select
            id="atrib4"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
          >
            <option value="normal">normal</option>
            <option value="raro"> raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="atrib5">
          <input
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            id="atrib5"
            data-testid="trunfo-input"
            type="checkbox"
          />
        </label>
        <label htmlFor="atrib6">
          <input
            name="isSaveButtonDisabled"
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ () => onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            }) }

          />
          Salvar
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
