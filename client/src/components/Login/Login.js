import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };    
        this.onTextBoxUsername = this.onTextBoxUsername.bind(this);
        this.onTextBoxPassword = this.onTextBoxPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {

    }
    
    componentDidMount() {
    }

    onTextBoxUsername(event){ 
        this.setState({username: event.target.value})
        console.log(this.state.username);
    }
    onTextBoxPassword(event){
        this.setState({ password: event.target.value})
    }

    onSubmit(){
        console.log('clicked');
        const {
            username,
            password,
          } = this.state;
          fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify({
              username: username,
              password: password,
            })
          }).then(data => this.setState({username: data.username, password: data.password}))
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }



    render() {
        console.log('username: ',this.state.username)
        const {
            username,
            password,
          } = this.state
        return (
            <div class="center-container-login">
                <div class="header-w3l">
                    <h1>Cookii</h1>
                </div>
                <div class="container-login">
                    <div class="login-form">
                        <div class="main-content-agile">
                            <div class="sub-main-w3">	
                                <div class="wthree-pro">
                                    <h2>Login </h2>
                                </div>
                                <form>
                                    <div class="pom-agile">
                                        <input placeholder="E-mail" 
                                            name="username" 
                                            class="user" 
                                            type="text" 
                                            required="" 
                                            onChange={this.onTextBoxUsername}
                                            value={username}
                                            />
                                        <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                                    </div>
                                    <div class="pom-agile">
                                        <input  placeholder="Password"
                                                name="password" 
                                                class="pass" 
                                                type="password" 
                                                required=""
                                                onChange={this.onTextBoxPassword} 
                                                value={password}
                                                />
                                        <span class="icon2"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                                    </div>
                                    <div class="sub-w3l">
                                        <h6><a href="#">Forgot Password?</a></h6>
                                        <div class="right-w3l">
                                            <button onClick={this.onSubmit}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}   

Login.propTypes = {

};

export default Login;