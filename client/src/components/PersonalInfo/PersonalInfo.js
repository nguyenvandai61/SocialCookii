import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Masonry from '../Masonry/Masonry'
import './PersonalInfo.css'
import { getDetailInfoUser , getDetailInfoUserById, getIdFromJwtToken} from '../../controller/UserJwtController';
import ListItem from '../ListItem/ListItem';

var token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : "";
var headerObject = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer '+token
}
class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            userInfo: {
                avatar: "",
                fullname: "",
                nfollowed: 0,
                nfollowing: 0,
                username: "",
                _id: ""
            },
            isMyPage: false,
            listOwnPost: []
        }
    }

    componentDidMount() {
        getDetailInfoUser().then(detailUserInfo => {
            console.log(detailUserInfo);
            if (detailUserInfo) {
                this.setState({user: detailUserInfo});
            }
        });
        let userId = getIdFromJwtToken();
        this.setState({userId: getIdFromJwtToken()});

        let userInfoId = window.location.pathname.split('/')[2];
        // Check whether is my Page
        this.setState({isMyPage: userInfoId == userId})
        fetch('/api/user/userInfo/' + userInfoId, {
            method: "GET",
            headers: headerObject,
        })
            .then(res => {
                if (res.status == 200) {
                    console.log(res)
                    res.json().then(data => {
                        this.setState({userInfo: data});
                        console.log(data);
                        this.fetchMyPost(data._id);
                    })
                }
                else {
        
                }
            });
        
    }
    componentWillReceiveProps(props) {
        this.setState({user: props.user}); 

    }

    fetchMyPost = (id) => {
        let url = '/api/post?createdBy='+id;
        console.log(url);
        fetch(url, {
            method: "GET",
            headers: headerObject,
        })
            .then(res => {
                if (res.status == 200) {
                    console.log(res)
                    res.json().then(data => {
                        console.log(data);
                        this.setState({listOwnPost: data});
                    })
                }
                else {
        
                }
            });
    }

    render() {
        const {userId, userInfo } = this.state;
        let editPersonalInfoLink = "";
        let myPostDiv = "";
        if (userId == userInfo._id) {
            editPersonalInfoLink = 
                <div className="edit">
                    <a href="/editPersonalInfo"><i class="fas fa-pen"></i></a>
                </div>;
            
            myPostDiv = 
                <div className="my-post">
                    <h2>Bài viết của tôi</h2>
                    <ListItem listOwnPost={this.state.listOwnPost}/>
                </div>
            
        } else {
            myPostDiv = 
                <div className="my-post">
                    <h2>Bài viết của {userInfo.fullname}</h2>
                    <ListItem listOwnPost={this.state.listOwnPost}/>
                </div>
        }
        return (
            <div className="personal-info">
                <div align="center" className="avatar">
                    <div id="avatar-frame">
                        <img src={"/"+userInfo.avatar} alt="img" style={{ height: "130px", width: "130px" }} />
                    </div>
                    <h2>{userInfo.fullname}</h2>
                    <p>@{userInfo.username}</p>
                    <p>{userInfo.email}</p>
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
                            {userInfo.nfollowed}
						<span>Followers</span>
                            </li>
                            <li>
                            {userInfo.nfollowing}
						<span>Following</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div class="edit">
                    <a href="/editPersonalInfo">
                        <i class="fas fa-pen"></i>
                        <span >Chỉnh sửa thông tin cá nhân</span>
                    </a>
                </div>
                
                <h2 align="center">Bài viết lưu trữ</h2>
                <Masonry />
                {editPersonalInfoLink}

                {myPostDiv}
            </div>
        );
    }
}

PersonalInfo.propTypes = {

};

export default PersonalInfo;