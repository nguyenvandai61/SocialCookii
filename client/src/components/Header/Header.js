import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import Avatar from '../../avatar.jpg';
import './Header.css';
class Header extends Component {
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
                    <p onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        Trang chủ
                    </p>
                </div>
                <div >
                    <p onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>Người bạn theo dõi</p>
                </div>
                <div id="search-bar">
                    <input type="text" />
                    <button id="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <div id="header-btns">
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        <button><i class="fas fa-bell"></i></button>
                    </div>
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        <button><i class="fas fa-comment-dots"></i></button>
                    </div>
                    <div className="header-btn" onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}>
                        <button>
                            <img id="avatar" src={Avatar} />
                        </button>
                    </div>
                </div>
                <div id="options">
                    <button  onMouseOver={this.mouseOverElement} onMouseOut={this.mouseOutElement}><i className="fas fa-bars"></i></button>
                    <ul>
                        <li>
                            Thêm tài khoản khác
                        </li>
                        <li>
                            Cài đặt
                        </li>
                        <li>
                            Nhận trợ giúp
                        </li>
                        <li>
                            Đăng xuất
                        </li>
                    </ul>
                </div>
            </header>
        );
    }
}

Header.propTypes = {

};

export default Header;