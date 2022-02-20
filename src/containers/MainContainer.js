import React, { Component } from 'react';
import render from 'react-dom';
import Button from '../components/Button.js';
import TextBox from '../components/TextBox.js';
import Wizard from '../assets/axolotlwizard.png';
import Login from '../components/Login.js';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wisdomStatus: 'notFetched',
      wisdom: '',
      name:'',
      loginStatus: false,
    };
    this.fetchWisdom = this.fetchWisdom.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }
  fetchWisdom() {
    //get request
    fetch("http://localhost:3000/advice")
    .then(res => res.json())
    .then ((data) => {
      this.setState({ wisdomStatus: 'fetched', wisdom: data });
    },
    (error) => {
      console.log(error)
    })
  }
  login (loginInfo) {
    //const { username, password  } = loginInfo;
    //insert back end logic here

    return this.setState({ loginStatus: true, name: "Data" })
  }
  signUp () {
    return this.setState({ loginStatus: true, name: "Data" })
  }
  render() {
    const { wisdom, wisdomStatus, loginStatus, name } = this.state;
    const renderLogin = () => {
      if (this.state.loginStatus) {
        return (
          <div className="MainContainer">
            <img className="Wizard" src={Wizard} />
            <TextBox wisdom={wisdom} wisdomStatus = {wisdomStatus} />
            <Button fetchWisdom={this.fetchWisdom} />
          </div>
        )
      } else {
        return (
          <div className="MainContainer">
            <Login login = {this.login} signUp = {this.signUp}/>
          </div>
        )
      }
    }

    return (
      <div>
        {renderLogin()}
      </div>
       
    );
  }
}

export default MainContainer;
