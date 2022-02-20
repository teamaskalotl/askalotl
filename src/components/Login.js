import React, { Component } from 'react';

class Login extends Component {
  initialState = {
    name: '',
    username: '',
    password: '',
    toggleSignUp: false,
  }
  state = this.initialState;

  logOrSign() {
    if (this.state.toggleSignUp=== true) {
      return (
        //Sign up form
        <div>
          <form onSubmit={() => this.props.signUp()}>
            <label>
              Email or username
              <input
                name="emailOrUsername"
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
          <button className='signUp' onClick={() => this.props.signUp()}>
            Sign Up
          </button>
        </div>
      )
    }
    else {
      return (
        //login form
        <div>
          <form onSubmit={() => this.props.login()}>
            <label>
              Username
              <input
                name="emailOrUsername"
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
