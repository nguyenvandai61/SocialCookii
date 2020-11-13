import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
import Avatar from '../../avatar.jpg';
import './Header.css';
class Header extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://kit.fontawesome.com/a076d05399.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render() {
        return (
            <header>
                <div id="logo-wrapper">
                    <img src={Logo}/>
                </div>
                <div id="home">
                    <p className="hover-effect">
                        Trang chủ
                    </p>
                </div>
                <div>
                    <p>Người bạn theo dõi</p>
                </div>
                <div id="search-bar">
                    <input type="text"/>
                </div>
                <div id="header-btns">
                    <div className="header-btn">
                        <button><i class="fas fa-bell"></i></button>
                    </div>
                    <div className="header-btn">
                        <button><i class="fas fa-comment-dots"></i></button>
                    </div>
                    <div className="header-btn">
                        <button>
                            <img id="avatar" src={Avatar}/>
                        </button>
                    </div>
                </div>
                <div id="options">
                    <button><i className="fas fa-bars"></i></button>
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