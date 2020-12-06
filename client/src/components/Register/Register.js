import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Register.css";
class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                email: '',
                phone: '',
                birthday: '',
                gender: '',
                role: ''
            }
        }

        this.onTextBoxUsername = this.onTextBoxUsername.bind(this);
        this.onTextBoxPassword = this.onTextBoxPassword.bind(this);
        this.onTextBoxRepeatPassword = this.onTextBoxRepeatPassword.bind(this);
        this.onTextBoxEmail = this.onTextBoxEmail.bind(this);
        this.onTextBoxPhone= this.onTextBoxPhone.bind(this);
        this.onTextBoxBirthday = this.onTextBoxBirthday.bind(this);;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
    }

    onChangeSelect(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.gender = event.target.value;
            return {user: newUser}
        })
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


    onTextBoxRepeatPassword(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.repeatPassword = event.target.value;
            return {user: newUser}
        })

    }
    onTextBoxEmail(event){
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.email = event.target.value;
            return {user: newUser}
        })
    }
    onTextBoxPhone(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.phone = event.target.value;
            return {user: newUser}
        })

    }
    onTextBoxBirthday(event){
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.birthday = event.target.value;
            return {user: newUser}
        })
    }

    onSuccessRegister = (role) => {
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
            email,
            phone,
            birthday,
            gender,
          } = this.state.user;
          fetch('/api/user/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: username,
              password: password,
              email: email,
              phone: phone,
              birthday: birthday,
              gender: gender,
              avatar: "/default/"
            })
          }).then(res => {
              console.log(res);
              if (res.status == 200) {
                res.json().then(data => {
                    console.log(data)
                    this.setState({user: data})
                    console.log("ok ")
                    window.location.href = "/login";
                })
              } 
              else {
                console.log("asdfghj");
              } 
          })
    }

    componentWillMount() {

    }

    componentDidMount() {
        console.log(this);
        console.log(this.props);
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
            email,
            phone,
            birthday,
            gender,
            repeatPassword,
          } = this.state.user;
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
                                    <input  name="userName" 
                                            class="form-control" 
                                            placeholder="User name" 
                                            type="text" 
                                            onChange={this.onTextBoxUsername}
                                            value={username}/>
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                                    </div>
                                    <input name="email" 
                                            class="form-control" 
                                            placeholder="Email address" 
                                            type="email" 
                                            onChange={this.onTextBoxEmail}
                                            value={email}/>
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                                    </div>
                                    
                                    <input name="phone" 
                                            class="form-control" 
                                            placeholder="Phone number" 
                                            type="text" 
                                            onChange={this.onTextBoxPhone}
                                            value={phone}/>
                                </div>

                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                                    </div>
                                    <select onChange={this.onChangeSelect} value={gender} name="gender" class="custom-select" style={{maxWidth: "120px"}}>
                                        <option selected="">Nam</option>
                                        <option value="1">Nữ</option>
                                        <option value="2">Khác</option>
                                    </select>
                                </div>

                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                    </div>
                                    <input 
                                        name="birthday" 
                                        type="date" 
                                        class="form-control"  
                                        onChange={this.onTextBoxBirthday}
                                        value={birthday}/>
                                </div>
                               
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                    </div>
                                    <input 
                                        name="password" 
                                        class="form-control" 
                                        placeholder="Create password" 
                                        type="password" 
                                        onChange={this.onTextBoxPassword}
                                        value={password}/>
                                </div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                                    </div>
                                    <input
                                        name="repeatPassword"
                                        class="form-control" 
                                        placeholder="Repeat password" 
                                        type="password" 
                                        onChange={this.onTextBoxRepeatPassword}
                                        value={repeatPassword}/>
                                </div>
                                <div>
                                    <button type="submit" onClick={this.onSubmit} class="btn btn-primary btn-block"> Create Account  </button>
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