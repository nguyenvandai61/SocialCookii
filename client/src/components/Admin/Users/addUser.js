import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css'

import Sidebar from '../../Admin/templates/sidebar';
import Footer from '../../Admin/templates/footer';
class addUser extends Component {
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

    }
    getPostInfo = () => {

    }
    changeUserPage = () => {

    }
    loadData = () => {

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

        return (
            <div>
                {/* <!--Navbar Stars--> */}
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler ml-auto mb-2 bg-light" data-toggle="collapse" data-target="#myNavbar"><span
                        class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        {/* <!-- sidebar starts --> */}
                        <Sidebar />
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


                <div id="page-wrapper">

                    <div id="page-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <h2>Thêm User</h2>
                            </div>
                        </div>

                        <hr />
                        <div class="row">
                            <div class="col-md-12">

                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-md-12">

                                                <form role="form" method="post" action="">

                                                    <div class="form-group">
                                                        <label>Username</label>
                                                        <input type="text" name="user" class="form-control" />
                                                    </div>

                                                    <div class="form-group">
                                                        <label>Password</label>
                                                        <input type="text" name="pass" class="form-control" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Full name</label>
                                                        <input type="text" name="fullname" class="form-control" />
                                                    </div>

                                                    <button type="submit" name="submit" class="btn btn-success btn-md">Thêm</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                <Footer />










            </div>
        );
    }
}

addUser.propTypes = {

};

export default addUser;