import React, { Component } from 'react';
import EmailValidator from "email-validator";
import './App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: ''
    };

  }

  dismissError=()=> {
    this.setState({ error: '' });
  }

  handleSubmit=(evt)=> {
    evt.preventDefault();
    const passwordRegex = /(?=.*[0-9])/;
    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }
    else if (!EmailValidator.validate(this.state.email)) {
        return this.setState({ error: 'Invalid email address' });
    }
    else 
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    } else if (this.state.password.length < 8) {
        return this.setState({ error: "Password must be 8 characters long."});
      } else if (!passwordRegex.test(this.state.password)) {
        return this.setState({ error: 'Invalid password. Must contain one number'});
      }
      else 
    return this.setState({ error: '' });
  }
  onChangeVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate=(evt)=>{
      
    evt.preventDefault();
  }

  render() {
    
    return (
        <div className="LoginCover">
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>EMAIL</label>
          <input type="text" name="email"  value={this.state.email} placeholder="Enter your email"  onChange={this.onChangeVal} />

          <label>PASSWORD</label>
          <input type="password" name ="password" value={this.state.password} placeholder="Enter your password"  onChange={this.onChangeVal} />
          <br/>
          <button type="submit" onClick= {this.Validate} >
            Login
        </button>
        </form>
      </div></div>
    );
  }
}

export default Login;