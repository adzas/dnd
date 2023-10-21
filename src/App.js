import React, { Component } from 'react';
import './App.css';
import BackToHome from './BackToHome';
import Battle from './Battle';
import Home from './Home';
import PreparingToBattle from './PreparingToBattle';
import Rules from './Rules';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleSteps: ['Home', 'PreparingToBattle', 'Rules', 'Battle'],
      visibleStep: 'Home',
      battlefieldContent: null
    };
  };
  
  setVisibleStep = (step) => {
    if (this.state.possibleSteps.includes(this.state.visibleStep)) {
      this.setState({
        visibleStep: step
      });
    } else {
      throw new Error(`Undefined step "${step}"`);
    }
  };

  setBattlefieldContent = (jsonData) => {
    this.setState({
      battlefieldContent: jsonData
    });
  }

  render() {
    return (
      <div className="App">
        <Home changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
        <BackToHome changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
        <PreparingToBattle changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} setBattlefield={this.setBattlefieldContent} />
        <Battle changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} content={this.state.battlefieldContent} />
        <Rules changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
      </div>
    );
  }
}

export default App;
