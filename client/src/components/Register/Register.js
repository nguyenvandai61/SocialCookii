import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Register.css";
class Register extends Component {
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
            <div>
                <div class="register-container">





                    <div class="card bg-light">
                        <article class="card-body mx-auto" style={{maxWidth: "400px"}}>
                            <h4 class="card-title mt-3 text-center">Create Account</h4>
                            <p class="text-center">Get started with your free account</p>
                            <p>
                                <a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i>   Login via Twitter</a>
                                <a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
                            </p>
                            <p class="divider-text">
                                <span class="bg-light">OR</span>
                            </p>
                            <form>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                                    </div>
                                    <input name="" class="form-control" placeholder="Full name" type="text" />
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                                    </div>
                                    <input name="" class="form-control" placeholder="Email address" type="email" />
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                                    </div>
                                    <select class="custom-select" style={{maxWidth: "120px"}}>
                                        <option selected="">+971</option>
                                        <option value="1">+972</option>
                                        <option value="2">+198</option>
                                        <option value="3">+701</option>
                                    </select>
                                    <input name="" class="form-control" placeholder="Phone number" type="text" />
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                                    </div>
                                    <select class="form-control">
                                        <option selected=""> Select job type</option>
                                        <option>Designer</option>
                                        <option>Manager</option>
                                        <option>Accaunting</option>
                                    </select>
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                    </div>
                                    <input class="form-control" placeholder="Create password" type="password" />
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                    </div>
                                    <input class="form-control" placeholder="Repeat password" type="password" />
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
                                </div>
                                <p class="text-center">Have an account? <a href="/login">Log In</a> </p>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {

};

export default Register;