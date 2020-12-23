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

    componentDidMount() {

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
        return (
            <div class= "container-fluid search-user">
                <div class = "row mt-2">
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class = "row mt-2">
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6 col-lg-2 col-sm-4">
                        <div class="infor-card">
                            <a href="#">
                                <div class="cover-image">
                                    <img src={CoverImage}/>
                                </div>
                                <div class="avatar">
                                    <img src={Avatar} />
                                </div>
                                <div class="infor-user">
                                    <div>
                                        <div class="username">
                                            <span>Phan Vũ</span>
                                        </div>
                                        <div class="followers">
                                            <span>1 Người theo dõi</span>
                                        </div>
                                        <div class="btn-follow">
                                            <button > Theo dõi</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>   
        );
    }
}

SearchUser.propTypes = {

};

export default SearchUser;