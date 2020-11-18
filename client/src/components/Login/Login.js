import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

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
                    <form action="#" method="post">
                        <div class="pom-agile">
                            <input placeholder="E-mail" name="Name" class="user" type="email" required=""/>
                            <span class="icon1"><i class="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div class="pom-agile">
                            <input  placeholder="Password" name="Password" class="pass" type="password" required=""/>
                            <span class="icon2"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                        </div>
                        <div class="sub-w3l">
                            <h6><a href="#">Forgot Password?</a></h6>
                            <div class="right-w3l">
                                <input type="submit" value="Login"/>
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