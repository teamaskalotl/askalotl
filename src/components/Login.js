import React, { Component } from 'react';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      username: '',
      password: '',
      toggleSignUp: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    this.setState({
      [target.name]: target.value,
    });
  }
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.login({username: this.state.username, password :this.state.password})
  }
  handleSignupSubmit(e) {
    e.preventDefault();
    this.props.signUp({firstName : this.state.firstName, username: this.state.username, password :this.state.password})
  }

  logOrSign() {
    if (this.state.toggleSignUp === true) {
      return (
        //Sign up form
        <div>
          <form onSubmit={(e) => this.handleSignupSubmit(e)}>
          <label>
              Name
              <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Username
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
          </form>
          <button className='signUp' onClick={(e) => this.handleSignupSubmit(e)}>
            Sign Up
          </button>
        </div>
      )
    }
    else {
      return (
        //login form
        <div>
          <form onSubmit={(e) => this.handleLoginSubmit(e)}>
            <label>
              Username
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <button type="submit">Log in</button>
          </form>
          <button className='signUp' onClick={() => this.setState({toggleSignUp: true})}>Sign Up</button>

        </div>

      )


    }

  }

  render() {
    return (
      <div>
        { this.logOrSign() }
      </div>
    );
  }
}


export default Login;
