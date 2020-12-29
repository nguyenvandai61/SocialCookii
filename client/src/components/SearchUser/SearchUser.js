import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchUser.css';
import CoverImage from '../../image/anh_bia/anh_bia1.jpg';
import Avatar from '../../image/avatars/avatar.jpg';

class SearchUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listUser: []
        }
    }

    componentWillMount() {

    }
    queryUser = (query) => {
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        fetch('/api/user/search/q='+query, {
            method: "GET",
            headers: { 
                'Authorization': 'bearer '+token,
                'Content-Type': 'application/json' 
            },
        })
        .then(res => {
            console.log(res);
            if (res.status == 200) {
              res.json().then(data => {
                  this.setState({listUser: data})
              })
            } 
            else {
            } 
        })
    }
    componentDidMount() {
        console.log("didmount");
        let q = window.location.search.substring(3);
        console.log(q);
        if (q == "") return;
        this.queryUser(q);
    }

    componentWillReceiveProps(nextProps) {
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        this.queryUser(nextProps.query);
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const {listUser} = this.state
        return (
            <div class= "container-fluid search-user">
                <div class = "row mt-2">
                    {
                    listUser.length == 0? "Không có user phù hợp":
                    listUser.map(user => {
                        return (
                            <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                            <div class="infor-card">
                                <a href="#">
                                    <div class="cover-image">
                                        <img src={CoverImage}/>
                                    </div>
                                    <div class="avatar">
                                        <img src={"/"+user.avatar} />
                                    </div>
                                    <div class="infor-user">
                                        <div>
                                            <div class="username">
                                                <span>{user.username}</span>
                                            </div>
                                            <div class="followers">
                                                <span>{user.followed.length} Người theo dõi</span>
                                            </div>
                                            <div class="btn-follow">
                                                <button > Theo dõi</button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>)
                    })
                }
                </div>
            </div>   
        );
    }
}

SearchUser.propTypes = {

};

export default SearchUser;