import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberClicks1: 0,
      numberClicks2: 0,
      numberClicks3: 0
    };
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
  };

  button1() {
    this.setState((previousState, _props) => ({
      numberClicks1: previousState.numberClicks1 + 1
    }), () => {
      console.log(`Button 1 ${this.buttonColor(this.state.numberClicks1)}`);
    });
  };

  button2() {
    this.setState((previousState, _props) => ({
      numberClicks2: previousState.numberClicks2 + 1
    }), () => {
      console.log(`Button 2 ${this.buttonColor(this.state.numberClicks2)}`);
    });
  };

  button3() {
    this.setState((previousState, _props) => ({
      numberClicks3: previousState.numberClicks3 + 1
    }), () => {
      console.log(`Button 3 ${this.buttonColor(this.state.numberClicks3)}`);
    });
  };

  buttonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  };

  render() {
    const { numberClicks1, numberClicks2, numberClicks3 } = this.state;

    return (
      <>
        <button onClick={ this.button1 } style={{ backgroundColor: this.buttonColor(numberClicks1) }}>{ numberClicks1 }</button>
        <button onClick={ this.button2 } style={{ backgroundColor: this.buttonColor(numberClicks2) }}>{ numberClicks2 }</button>
        <button onClick={ this.button3 } style={{ backgroundColor: this.buttonColor(numberClicks3) }}>{ numberClicks3 }</button>
      </>
    );
  }
}

export default App;
