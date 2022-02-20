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
      name: '',
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
    const { username, password  } = loginInfo;
    //insert back end logic here
    fetch(`http://localhost:3000/login/${username}/${password}`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      //if (typeof data !== string) data = ''
      return this.setState({
        name: data,
        loginStatus: true
      })
    })
    .catch(err => {
      return this.setState({
        name: '',
        loginStatus: false
        //do we want to render our sign up page here?
      })
    } )
    //return this.setState({ loginStatus: true, name: "Data" })
  }

  signUp (signUpInfo) {
    console.log(signUpInfo)
    const { firstName, username, password } = signUpInfo;
    console.log(firstName);
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: firstName,
        username: username,
        password: password
      })
    })
    .then((res) => res.json())
    .then((data) => {
      //if (typeof data !== string) data = ''
      return this.setState({
        name: data,
        loginStatus: true
      })
    })
    .catch(err => {
      return this.setState({
        name: '',
        loginStatus: false
      })
    })
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
