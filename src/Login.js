import React, { Component } from 'react';
import EmailValidator from "email-validator";
import {connect} from 'react-redux';
import './App.css';

class Login extends Component {
    state = {
      email: '',
      password: '',
      error: '',
      loginStatus: false
    };
   
  dismissError=()=> {
    this.setState({ error: '' });
  }

  handleSubmit=(evt)=> {
    const emailId=this.state.email;
    const password= this.state.password;
    const loginStatus= this.state.loginStatus;
    const data={
      emailId,password,loginStatus
    }
    evt.preventDefault();
    const passwordRegex = /(?=.*[0-9])/;
    if (!this.state.email) {
      this.setState({ error: 'Email is required' });

      return;
    }
    else if (!EmailValidator.validate(this.state.email)) {
      this.setState({ error: 'Invalid email address' });

      return;
    }
    else 
    if (!this.state.password) {
      this.setState({ error: 'Password is required' });

      return;
    } else if (this.state.password.length < 8) {
        this.setState({ error: "Password must be 8 characters long."});

        return;
      } else if (!passwordRegex.test(this.state.password)) {
        this.setState({ error: 'Invalid password. Must contain one number'});

        return;
      }
       
    this.setState({ error: '' });
    this.props.dispatch({
      type: 'ADD_CHECK', data
    })
  }
  onChangeVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate=(evt)=>{
      
    evt.preventDefault();
  }

  render() {
    let LoginCover= null;
    let Login = null;
    let LoginHide= "login-box-hide";
    if(this.props.loginCheck){
      LoginCover = "LoginCover";
      Login = "Login";
      LoginHide= "";
    }
    return (
      <div className={LoginHide}>
      
        <div className={LoginCover}>
          <div className={Login}>
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
          </div>
          </div>
               
   
     </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginCheck: state.loginState.loginCheck
  }
 }
export default connect(mapStateToProps) (Login);