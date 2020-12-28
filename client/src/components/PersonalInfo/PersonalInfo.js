import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from '../Masonry/Masonry'
import './PersonalInfo.css'
import { getDetailInfoUser } from '../../controller/UserJwtController';
class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                avatar: "",
                fullname: "",
                nfollowed: 0,
                nfollowing: 0,
                username: "",
                _id: ""
            }
        }
    }

    componentDidMount() {
        getDetailInfoUser().then(detailUserInfo => {
            if (detailUserInfo) {
                this.setState({user: detailUserInfo})
            }
        });
    }
    componentWillReceiveProps(props) {
        this.setState({user: props.user}); 
    }

    render() {
        const { user } = this.props;
        console.log(user);
        return (
            <div className="personal-info">
                <div align="center" className="avatar">
                    <div id="avatar-frame">
                        <img src={user.avatar} alt="img" style={{ height: "130px", width: "130px" }} />
                    </div>
                    <h2>{user.fullname}</h2>
                    <p>{user.email}</p>
                        <div class="avatarcontainer">
                    <div class="hover">
                        <div class="icon-twitter"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="data">
                        <ul>
                            <li>
                                2,934
						<span>Tweets</span>
                            </li>
                            <li>
                            {user.nfollowed}
						<span>Followers</span>
                            </li>
                            <li>
                            {user.nfollowing}
						<span>Following</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="edit">
                    <a href="/editPersonalInfo"><i class="fas fa-pen"></i></a>
                </div>
                
                <h2 align="center">Bài viết lưu trữ</h2>
                <Masonry />
            </div>
        );
    }
}

PersonalInfo.propTypes = {

};

export default PersonalInfo;