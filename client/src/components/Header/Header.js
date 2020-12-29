import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Logo from '../../cookii-logo.png';
import { Link } from 'react-router-dom';
import { getDetailInfoUser, getIdFromJwtToken } from '../../controller/UserJwtController'
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            dropdown: false,
            user: {
                avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
            },
            query: "",
            searchBy: "Post"
        }
        this.onSearch = this.onSearch.bind(this)
    }
    homeClickHandler = () => {
        
        window.location.href = "/";
        this.setState({query: ""});
    }
    
    onSearch(e) {
        const node = ReactDOM.findDOMNode(this);
        let query = node.querySelector("#search-bar input").value
        if (query == "") return;
        window.location.href = "/searchUser?q=" + query;
    }

    getTextQuery = () => {
        const node = ReactDOM.findDOMNode(this);
        if (!node) return;
        let query = node.querySelector("#search-bar input").value;
        return query;
    }
    searchBy = (e) => {
        const node = ReactDOM.findDOMNode(this);
        let searchByTemp = e.target.innerText;
        node.querySelector("#dropdownMenuButton").innerHTML = searchByTemp;
        
        // console.log(e.target.getAttribute("value"));
        // this.setState({searchBy: });
        
        this.setState({searchBy: e.target.getAttribute("value")})
    }

    clearQuery = (e) => {
        const node = ReactDOM.findDOMNode(this);
        console.log(node.querySelector("#search-bar input"));
        node.querySelector("#search-bar input").value = "";
        this.setState({query: ""});
    }

    barsClickHandler = (e) => {
        let newState = !this.state.dropdown;
        this.setState({ 'dropdown': newState })
        if (newState)
            document.querySelector("#options ul").classList.add('show-element');
        else
            document.querySelector("#options ul").classList.remove('show-element');
    }

    logout = (e) => {
        localStorage.removeItem("user");
        window.location.href = '/login';
    }
    mouseOverElement(e) {
        e.target.classList.add("hover-effect");
    }
    mouseOutElement(e) {
        e.target.classList.remove("hover-effect");
    }
    componentWillMount() {

    }
    componentDidMount() {
    }
    componentWillReceiveProps(props) {
        this.setState({ user: props.user });
    }

    onSearchTextChange = (e) => {
        this.setState({query: e.target.value})
        this.props.getQuery(e.target.value);
    }
    render() {
        const { user } = this.state;
        console.log(this.state.searchBy);
        let searchLink =  "/search"+ this.state.searchBy +"?q="+this.state.query;
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
                    <div className="search-box">
                        <Link
                            to={searchLink}
                        >
                            <button id="search-btn">
                                <i class="fas fa-search"></i>
                            </button>
                        </Link>
                        <input type="text" placeholder="Tìm kiếm" onChange={this.onSearchTextChange}/>
                        <button id="clear-query-btn" onClick={this.clearQuery}>
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <div class="optional-search dropdown">
                        <button id="btn-optional-search" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tất cả các ghim
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onClick={this.searchBy} value="Post">Bài viết</a>
                            <a class="dropdown-item" onClick={this.searchBy} value="User">Mọi người</a>
                            <a class="dropdown-item" onClick={this.searchBy} value="Video">Videos</a>
                        </div>
                    </div>

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
                                <img id="avatar" src={user ? user.avatar : ""} />
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
                            <li onClick={this.logout}>
                                <p className="">Đăng xuất</p>
                            </li>
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