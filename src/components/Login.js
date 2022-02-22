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
            <div className='signUpFields'>
              <div>
                <label>
                Name:
                <input
                  name="firstName"
                  type="text"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                />
                </label>
              </div>
              <div>
                <label>
                Username:
                <input
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
                </label>
              </div>
              <div>
                <label>
                Password:
                <input
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                </label>
              </div>

            </div>
            
            <button 
            className='loginButton' 
            onClick={(e) => this.handleSignupSubmit(e)}>
            Sign Up
            </button>  
          </form>
          
        </div>
      )
    }
    else {
      return (
        //login form
        <div>
          <h2 className='welcome'>Welcome to Askalotl</h2>
          <form onSubmit={(e) => this.handleLoginSubmit(e)}>
            <div>
              <label>
              Username:
              <input
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
              </label>
            </div>
            <div>
              <label>
              Password :
              <input
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
              </label>
            </div>
            <div className='loginButtonCont'>
              <button type="submit" className='loginButton'>Log in</button>
              <button 
              className='loginButton' 
              onClick={() => this.setState({toggleSignUp: true})}>Sign Up
              </button>
            </div>
          </form>
        </div>

      )


    }

  }

  render() {
    return (
      <div className='loginContainer'>
        <div className='loginPage'>
          { this.logOrSign() }
        </div>
      </div>
      
    );
  }
}


export default Login;
