import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css';
import '../../Admin/Users/User.css';

import Sidebar from '../templates/sidebar';
import Footer from '../templates/footer';
import Header from '../templates/header';
class EditUser extends Component {
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
                <Header />


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
                <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <form role="form" method="post" action="">
                                        <div class="form-group">
                                            <label>Username</label>
                                            <input type="text" name="user" class="form-control" value="" />
                                        </div>

                                        <div class="form-group">
                                            <label>Password</label>
                                            <input type="text" name="pass" class="form-control" value="" />
                                        </div>
                                      
                                       
                                        <button type="submit" name="submit" class="btn btn-success btn-md">Sửa</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />

            </div>
        );
    }
}



export default EditUser;