import React, { Component } from 'react';
import './App.css';
import Battle from './Battle';
import ConstHelper from './helpers/constHelper';
import Home from './Home';
import PreparingToBattle from './PreparingToBattle';
import Rules from './Rules';
import Settings from './Settings';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // component list
      possibleSteps: ['Home', 'PreparingToBattle', 'Rules', 'Battle', 'Settings'],
      // default visible component
      visibleStep: 'Home',
      // Battlefield content - list of enemies and players
      battlefieldContent: null,
      // state game process like as actual enemy tour
      gameProcess: {currentElementID: 0}
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

  // this is switch between PreparingToBattle and Battle elements
  setBattlefieldContent = (jsonData, currentElementID) => {
    this.setState({
      battlefieldContent: jsonData,
      gameProcess: {currentElementID: currentElementID}
    });
  }

  render() {
    return (
      <div className="App"  style={{width: ConstHelper.getWidthApp(), minHeight: ConstHelper.getHeightApp(), height: 'auto'}}>
        <Home changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
        <PreparingToBattle
          changeVisible={this.setVisibleStep}
          activeStep={this.state.visibleStep}
          setBattlefield={this.setBattlefieldContent}
        />
        <Battle
          changeVisible={this.setVisibleStep}
          activeStep={this.state.visibleStep}
          content={this.state.battlefieldContent}
          currElID={this.state.gameProcess.currentElementID}
        />
        <Rules changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
        <Settings changeVisible={this.setVisibleStep} activeStep={this.state.visibleStep} />
      </div>
    );
  }
}

export default App;
