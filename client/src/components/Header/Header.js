import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../cookii-logo.png';
import Avatar from '../../avatar.jpg';
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            user: {
                avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
            }
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

    componentDidMount() {
    }
    render() {
        const {user} = this.state
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
                    <input type="text" placeholder="Tìm kiếm" />
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
                            <img id="avatar" src={user.avatar} />
                        </button>
                            </Link>
                    </div>
                </div>
                <div id="options">
                    <button onClick={this.barsClickHandler}><i className="fas fa-bars"></i></button>
                    <div className="dropdown">
                        <ul>
                            <li>
                                <p className="">Thêm tài khoản khác</p>
                            </li>
                            <li>
                                <p className="">Cài đặt</p>
                            </li>
                            <li>
                                <p className="">Nhận trợ giúp</p>
                            </li>
                            <Link to="/login">
                            <li>
                                <p className="">Đăng xuất</p>
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