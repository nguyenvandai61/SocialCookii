import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
// import { useHistory } from "react-router"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: '',
                role: ''
            }
        };    
        this.onTextBoxUsername = this.onTextBoxUsername.bind(this);
        this.onTextBoxPassword = this.onTextBoxPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {

    }
    
    componentDidMount() {
        console.log(this);
    console.log(this.props);
    }

    onTextBoxUsername(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.username = event.target.value;
            return {user: newUser}
        })
        console.log(this.state.username);
    }
    onTextBoxPassword(event){
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.password = event.target.value;
            return {user: newUser}
        })
    }
    onSuccessLogin = (role) => {
        console.log(this.props);
        // this.props.history = [];
        if (role == "admin") {
            window.location.href = "/admin";
            // useHistory().push("/admin");
            // this.props.history.push("/admin");
        }
        else {
            
            window.location.href = "/";
            // this.props.history.push("/");
            
        }
    }
    onSubmit(e){
        e.preventDefault();
        console.log('clicked');
        const {
            username,
            password,
          } = this.state.user;
          fetch('/api/user/login', {
            method: "POST",
            body: JSON.stringify({
              username: username,
              password: password,
            })
          }).then(res => {
              console.log(res);
              if (res.status == 200) {
                res.json().then(data => {
                    this.setState({user: data.data})
                    
                    let role = data.data.role;
                    this.onSuccessLogin(role);
                })
              } 
              else {

              } 
          })
    }
   
    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState == this.state) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }



    render() {
        const {
            username,
            password,
          } = this.state.user
        console.log(username);
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