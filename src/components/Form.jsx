import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          nome:
          <input id="name" data-testid="name-input" type="text" />
        </label>
        descrição:
        <label htmlFor="descrição">
          <textarea id="descrição" data-testid="description-input" type="textarea" />
        </label>
        <label htmlFor="atrib">
          número:
          <input id="atrib" data-testid="attr1-input" type="number" />
        </label>
        <label htmlFor="atrib1">
          número:
          <input id="atrib1" data-testid="attr2-input" type="number" />
        </label>
        <label htmlFor="atrib2">
          número:
          <input id="atrib2" data-testid="attr3-input" type="number" />
        </label>
        <label htmlFor="atrib3">
          <input id="atrib3" data-testid="image-input" type="text" />
        </label>
        <label htmlFor="atrib4">
          <select id="atrib4" data-testid="rare-input" name="select">
            <option value="normal">normal</option>
            <option value="raro"> raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="atrib5">
          <input id="atrib5" data-testid="trunfo-input" type="checkbox" />
        </label>
        <label htmlFor="atrib6">
          <input type="button" data-testid="save-button" value="Salvar" />
        </label>
      </form>
    );
  }
}

export default Form;
