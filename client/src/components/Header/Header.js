import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import Avatar from '../../avatar.jpg';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }
    }
   
    barsClickHandler = (e) => {
        let newState = !this.state.dropdown;
        this.setState({ 'dropdown': newState })
        if (newState)
            document.querySelector("#options ul").classList.add('show-element');
        else
            document.querySelector("#options ul").classList.remove('show-element');
    }
    mouseOverElement(e) {
        e.target.classList.add("hover-effect");
    }
    mouseOutElement(e) {
        e.target.classList.remove("hover-effect");
    }

    renderFontAwesome() {
        const script = document.createElement("script");

        script.src = "https://kit.fontawesome.com/a076d05399.js";
        script.async = true;

        document.body.appendChild(script);
    }
    componentDidMount() {
        this.renderFontAwesome();
    }
    render() {
        return (
            <header>
                <div id="logo-wrapper">
                    <img src={Logo} />
                </div>
                <div id="home">
                    <Link to="/">
                        <p onClick={this.homeClickHandler}
                            onMouseOver={this.mouseOverElement}
                            onMouseOut={this.mouseOutElement}>
                            Trang chủ
                        </p>
                    </Link>
                </div>
                <div >
                    <Link to="/friends">
                        <p
                            onMouseOver={this.mouseOverElement}
                            onMouseOut={this.mouseOutElement}>
                            Theo dõi
                            </p>
                    </Link>
                </div>
                <div id="search-bar">
                    <input type="text" />
                    <button id="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div id="header-btns">
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        <button><i className="fas fa-bell"></i></button>
                    </div>
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        <button><i className="fas fa-comment-dots"></i></button>
                    </div>
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                            <Link to="/personalInfo">
                        <button>
                            <img id="avatar" src={Avatar} />
                        </button>
                            </Link>
                    </div>
                </div>
                <div id="options">
                    <button onClick={this.barsClickHandler}><i className="fas fa-bars"></i></button>
                    <div class="dropdown">
                        <ul>
                            <li>
                                <p class="">Thêm tài khoản khác</p>
                            </li>
                            <li>
                                <p class="">Cài đặt</p>
                            </li>
                            <li>
                                <p class="">Nhận trợ giúp</p>
                            </li>
                            <Link to="/login">
                            <li>
                                <p class="">Đăng xuất</p>
                            </li>
                            </Link>
                        </ul>
                    </div>
                </div>

            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;