import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Masonry from '../Masonry/Masonry'
import Avatar from '../../avatar.jpg'
import './PersonalInfo.css'
class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: "dai",
                password: "123",
                fullname: "Đại nguyễn",
                email: "vandai@gmail.com",
                avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
                nfollowing: 5,
                nfollowed: 7
            }
        }
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }
    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const {user} = this.state;
        return (
            <div>
                <div align="center" className="avatar">
                    <div id="avatar-frame">
                        <img src={user.avatar} alt="img" style={{height: "130px", width: "130px"}}/>
                    </div>
                    <h2>{user.fullname}</h2>
                    <p>{user.email}</p>
                    <p>{user.nfollowed} Người theo dõi - 
                        {user.nfollowing} Người đang theo dõi</p>
                </div>
                <div class="edit">
                    <a href="/editPersonalInfo"><i class="fas fa-pen"></i></a>
                </div>
                <h2 align="center">Bài viết lưu trữ</h2>
                <Masonry/>
            </div>
        );
    }
}

PersonalInfo.propTypes = {

};

export default PersonalInfo;