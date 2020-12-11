import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import './style.css'

import Sidebar from './templates/Sidebar';
import Footer from './templates/footer';
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: {
                size: 0,
                data: [],
                pagination: {
                    current: 1,
                    nPerPage: 6
                }
            },
            hashtags: {
                size: 0
            },
            posts: {
                size: 0
            }
        }
    }
    getUserInfo = () => {
        fetch('/api/user/', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    let users = { ...this.state.users }
                    users.size = data.length;
                    users.data = data;
                    this.setState({ users: users })
                })
            }
            else {

            }
        })
    }
    getPostInfo = () => {
        fetch('/api/post/', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    let posts = { ...this.state.posts }
                    posts.size = data.length;
                    this.setState({ posts: posts })
                })
            }
            else {

            }
        })
    }
    changeUserPage = () => {

    }
    loadData =() => {
        this.getUserInfo();
        this.getPostInfo();
        this.forceUpdate();
    }
    componentWillMount() {

    }

    componentDidMount() {
        this.loadData();
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
        let { users, hashtags, posts } = this.state;
        console.log(users);
        const indexOfLast = users.pagination.current * users.pagination.nPerPage;
        const indexOfFirst = indexOfLast - users.pagination.nPerPage;
        let currentUsers = users.data.slice(indexOfFirst, indexOfLast);
        console.log(currentUsers)
        let renderCurrentU = currentUsers.map((user, index) => {
            const {username, password, role} = user;
            return (<tr>
                <td>{indexOfFirst+index+1}</td>
                <td>{username}</td>
                <td>{password}</td>
                <td>{role}</td>
                <td><button class="btn btn-primary btn-sm">Message</button></td>
            </tr>)
        })
        let nPage = Math.ceil(users.size / users.pagination.nPerPage);
        let renderUsersPagi = [];
        for (let i = 0; i < nPage; i++)
            renderUsersPagi.push(
            <li class="page-item active"><a href="#" class="page-link py-2 px-3">{i+1}</a></li>
            )
        
        console.log(renderCurrentU);
        return (
            <div>

                {/* <!--Navbar Stars--> */}
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler ml-auto mb-2 bg-light" data-toggle="collapse" data-target="#myNavbar"><span
                        class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        {/* <!-- sidebar starts --> */}
                        <Sidebar/>
                        {/* <!-- SideBar Ends --> */}


                        {/* <!--Top Navbar--> */}

                        <div class="col-xl-10 col-lg-9 col-md-8 bg-dark ml-auto fixed-top py-2 top-navbar">
                            <div class="row align-items-center">
                                <div class="col-md-4">
                                    <h4 class="text-light text-uppercase mb-0">DashBoard</h4>
                                </div>
                                <div class="col-md-5">
                                    <form>
                                        <div class="input-group">
                                            <input type="text" class="form-control search-input" placeholder="Search.." />
                                            <button type="button" class="btn btn-white search-button m-0 p-2"><i
                                                class="fas fa-search text-danger"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-3">
                                    <ul class="navbar-nav">
                                        <li class="nav-item icon-parent">
                                            <a href="#" class="nav-link"><i
                                                class="fas fa-comments fa-lg text-muted icon-bullet"></i></a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link"><i
                                                class="fas fa-bell text-muted fa-lg icon-bullet"></i></a>
                                        </li>
                                        <li class="nav-item ml-md-auto">
                                            <a href="" data-toggle="modal" data-target="#sign-out" class="nav-link"><i
                                                class="fas text-danger fa-sign-out-alt fa-lg text-muted"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--End of Top Navbar--> */}
                    </div>
                </nav>
                {/* <!--Navbar Ends--> */}




                {/* <!-- Modal starts Here --> */}
                <div class="modal fade" id="sign-out">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4>Want to leave?</h4>
                                <button class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                Are You Sure
                </div>
                            <div class="modal-footer">
                                <button class="btn btn-success" data-dismiss="modal">Save Changes</button>
                                <Link to="/login">
                                    <button class="btn btn-danger" data-dismiss="modal">Log out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>



                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row mt-md-3 pt-md-5 mb-3">
                                    <div class="col-xl-3 col-sm-6 p-2">
                                        <div class="card card-style">
                                            <div class="card-body ">
                                                <div class="d-flex justify-content-between">
                                                    <i class="fas fa-hashtag fa-3x text-warning"></i>
                                                    <div class="text-right">
                                                        <h5>Hashtags</h5>
                                                    <h3>{hashtags.size}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <i class="fas fa-sync mr-3"></i>
                                                <span>Updated Know</span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-3 col-sm-6 p-2">
                                        <div class="card card-style">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <i class="fas fa-sticky-note fa-3x text-success"></i>
                                                    <div class="text-right">
                                                        <h5>Posts</h5>
                                                        <h3>{posts.size}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <i class="fas fa-sync mr-3"></i>
                                                <span>Updated Know</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 p-2">
                                        <div class="card card-style">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <i class="fas fa-users fa-3x text-primary"></i>
                                                    <div class="text-right">
                                                        <h5>Users</h5>
                                                        <h3>{users.size}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <i class="fas fa-sync mr-3"></i>
                                                <span>Updated Know</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-sm-6 p-2">
                                        <div class="card card-style">
                                            <div class="card-body">
                                                <div class="d-flex justify-content-between">
                                                    <i class="fas fa-chart-line fa-3x text-danger"></i>
                                                    <div class="text-right">
                                                        <h5>Sales</h5>
                                                        <h3>$135,000</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer">
                                                <i class="fas fa-sync mr-3"></i>
                                                <span>Updated Know</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                
                                            
                <Footer/>






                


                
            </div>
        );
    }
}

index.propTypes = {

};

export default index;