import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom'
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
            },
            isSuccess: false,
            message: ''
        };
        this.onTextBoxUsername = this.onTextBoxUsername.bind(this);
        this.onTextBoxPassword = this.onTextBoxPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillMount() {

    }

    componentDidMount() {
        console.log(this);
    }

    onTextBoxUsername(event) {
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.username = event.target.value;
            return { user: newUser }
        })
        console.log(this.state.username);
    }
    onTextBoxPassword(event) {
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.password = event.target.value;
            return { user: newUser }
        })
    }
    onSuccessLogin = (role) => {
        console.log(this.props);
        // this.props.history = [];
        console.log(role);
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
    onSubmit(e) {
        e.preventDefault();
        console.log('clicked');
        const {
            username,
            password,
        } = this.state.user;
        fetch('/api/user/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => {
                if (!res.ok) {
                    throw Error("Failed");
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                localStorage.setItem("user", JSON.stringify({ _id: data._id, token: data.token }))
                // Redirect another page
                let role = data.role;
                this.onSuccessLogin(role);
            })
            .catch((err) => {
                this.setState({isSuccess: false, message:"Đăng nhập thất bại"});
            })
            
    }
    render() {
        const {
            username,
            password,
        } = this.state.user
        console.log(username);
        const { isSuccess, message } = this.state;
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
                                        <input placeholder="User Name"
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
                                        <input placeholder="Password"
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
                                        <div>
                                            {!isSuccess ? <div className="error-message">{message}</div> : <Redirect to='dashboard' />}
                                        </div>
                                        
                                        <h6><a href="#">Forgot Password?</a></h6>
                                        <div class="right-w3l">
                                            <button onClick={this.onSubmit}>Login</button>
                                        </div>

                                        <div class = "link-register">
                                            Don't have account? <Link to='register'>Register here</Link>
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