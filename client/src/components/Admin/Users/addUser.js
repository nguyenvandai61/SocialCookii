import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css'

import Sidebar from '../templates/Sidebar';
import Footer from '../templates/footer';
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
        );
    }
}

addUser.propTypes = {

};

export default addUser;