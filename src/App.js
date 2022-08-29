import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardTrunfo: '',
    cardRare: 'normal',
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    data: [],
  };

  SaveButton = (infoObjetc) => {
    this.setState((prevState) => ({
      data: [...prevState.data, infoObjetc],
    }));
    this.setState(({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
    }), this.trunfoPage);
  };

  trunfoPage = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) {
      this.setState({
        hasTrunfo: true,
        cardTrunfo: false,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,

    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardRare,

      } = this.state;
      const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const total = 210;
      const max = 90;
      if (Number(cardAttr1) >= 0
        && Number(cardAttr1) <= max
        && Number(cardAttr2) >= 0
        && Number(cardAttr2) <= max
        && Number(cardAttr3) >= 0
        && Number(cardAttr3) <= max
        && soma <= total
        && cardName
        && cardDescription
        && cardImage
        && cardRare) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

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
      isSaveButtonDisabled,
      hasTrunfo,
      data,

    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.SaveButton }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        {data.map((infoObjetc) => (<Card
          key={ infoObjetc.cardName }
          cardName={ infoObjetc.cardName }
          cardDescription={ infoObjetc.cardDescription }
          cardImage={ infoObjetc.cardImage }
          cardAttr1={ infoObjetc.cardAttr1 }
          cardAttr2={ infoObjetc.cardAttr2 }
          cardAttr3={ infoObjetc.cardAttr3 }
        />))}
      </div>
    );
  }
}

export default App;
