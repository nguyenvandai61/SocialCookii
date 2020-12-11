import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css'

import Header from '../templates/Header';
import Footer from '../templates/footer';
import AddUser from './AddUser'
class indexUser extends Component {
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
                <Header/>


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
                    <div class="container-fluid mt-5">
                        <div class="row">
                        <div class="col-sm-6">
                            <AddUser/>
                        </div>
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row ">
                                    <div class="col-xl-6 col-12 mb-4 mb-xl-0">
                                        <h2 class="text-muted text-center mb-5">Users</h2>
                                        <table class="table table-striped bg-light text-center">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Role</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderCurrentU}
                                            </tbody>
                                        </table>
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item"><a href="#" class="page-link px-3 py-2">
                                                <span>&laquo;</span>
                                            </a></li>
                                            {
                                                
                                            }
                                            <li class="page-item active"><a href="#" class="page-link py-2 px-3">1</a></li>
                                            <li class="page-item"><a href="#" class="page-link py-2 px-3">2</a></li>
                                            <li class="page-item"><a href="#" class="page-link py-2 px-3">3</a></li>
                                            <li class="page-item"><a href="#" class="page-link py-2 px-3">4</a></li>
                                            <li class="page-link"><a href="#" class="page-item py-2 px-3">
                                                <span>&raquo;</span>
                                            </a></li>
                                        </ul>
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

indexUser.propTypes = {

};

export default indexUser;