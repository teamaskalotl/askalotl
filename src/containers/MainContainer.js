import React, { Component } from 'react';
import render from 'react-dom';
import Button from '../components/Button.js';
import TextBox from '../components/TextBox.js';
import Wizard from '../assets/axolotlwizard.png';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wisdomStatus: 'notFetched',
      wisdom: '',
    };
    this.fetchWisdom = this.fetchWisdom.bind(this);
  }
  fetchWisdom() {
    //get request
    this.setState({ wisdomStatus: 'fetched', wisdom: 'This is the wisdom' });
  }
  render() {
    const { wisdom } = this.state;

    const renderWisdom = () => {
      if (this.state.wisdomStatus == 'fetched') {
        return <TextBox wisdom={wisdom} />;
      } else return <h1>Awaiting your command</h1>;
    };

    return (
      <div className="MainContainer">
        <img className="Wizard" src={Wizard} />
        <Button fetchWisdom={this.fetchWisdom} />
        {renderWisdom()}
      </div>
    );
  }
}

export default MainContainer;
