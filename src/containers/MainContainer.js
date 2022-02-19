import React, { Component } from 'react';
import render from 'react-dom'
import Button from '../components/Button.js'
import TextBox from '../components/TextBox.js'

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Button/>
        <TextBox/>
      </div>
    )
  };
}
  
export default MainContainer;