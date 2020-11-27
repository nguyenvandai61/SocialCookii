import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import './style.css'
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
        console.log(renderCurrentU);
        return (
            <div>

                {/* <!--Navbar Stars--> */}
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler ml-auto mb-2 bg-light" data-toggle="collapse" data-target="#myNavbar"><span
                        class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        {/* <!-- sidebar starts --> */}
                        <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top sidebar-side">
                            <a href="#" class="navbar-brand text-white mx-auto text-center bottom-border py-3 mb-4 d-block">Code And
                    Create</a>
                            <div class="bottom-border text-center">
                                <img src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    width="50" class="rounded-circle" alt="" />
                                <a href="" class="text-white">Joshua D'Souza</a>
                            </div>
                            <ul class="navbar-nav mt-4 flex-column ">
                                <li class="nav-item ">
                                    <a href="#" class="nav-link text-white p-2 mb-2 current"><i
                                        class="fas fa-home fa-lg mr-3 text-white"></i>DashBoard</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                                        class="fas fa-user fa-lg mr-4 text-white"></i>Profile</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                                        class="fas fa-envelope fa-lg mr-4 text-white"></i>Message</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link p-2 mb-2 sidebar-link text-white"><i
                                        class="fas fa-shopping-cart fa-lg text-white mr-4"></i>Sales</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                                        class="fas fa-chart-line fa-lg mr-3 text-white"></i>Analystics</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                                        class="fas fa-chart-bar fa-lg mr-4 text-white"></i>Charts</a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                                        class="fas fa-table fa-lg mr-4 text-white"></i>Tables</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link p-2 mb-2 sidebar-link text-white"><i
                                        class="fas fa-wrench fa-lg text-white mr-4"></i>Settings</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link p-2 mb-2 sidebar-link text-white"><i
                                        class="fas fa-file-alt fa-lg text-white mr-4"></i>Documentation</a>
                                </li>
                            </ul>
                        </div>
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


                <section>
                    <div class="container-fluid mt-5">
                        <div class="row">
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
                                                    <th>Contact</th>
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
                                    <div class="col-xl-6 col-12">
                                        <h2 class="text-muted text-center mb-5">Pricing</h2>
                                        <table class="table table-dark table-hover text-center">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-success w-75 py-2">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-success py-2 w-75">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-danger w-75 py-2">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-success w-75 py-2">Approved</span></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-danger w-75 py-2">Waiting</span></td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amir</td>
                                                    <td>$1000</td>
                                                    <td>25/09/2011</td>
                                                    <td><span class="badge badge-success w-75 py-2">Approved</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul class="pagination justify-content-center">
                                            <li class="page-item"><a href="#" class="page-link px-3 py-2">
                                                <span>&laquo;</span>
                                            </a></li>
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





                <section class="mt-5">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row mb-4">
                                    <div class="col-xl-6 col-12">
                                        <div class="bg-dark p-4 text-white rounded">
                                            <h4 class="mb-5">Conversion Rates</h4>
                                            <h6 class="mb-3">Google Chrome</h6>
                                            <div class="progress mb-4" style={{ height: "20px" }}>
                                                <div class="progress-bar progress-bar-striped font-weight-bold" style={{ width: "82%" }}>
                                                    82%
                                    </div>
                                            </div>
                                            <h6 class="mb-3">Mozila Firefox</h6>
                                            <div class="progress mb-4" style={{ height: "20px" }}>
                                                <div class="progress-bar progress-bar-striped font-weight-bold bg-success"
                                                    style={{ width: "90%" }}>
                                                    90%
                                    </div>
                                            </div>

                                            <h6 class="mb-3">Safari</h6>
                                            <div class="progress mb-4" style={{ height: "20px" }}>
                                                <div class="progress-bar progress-bar-striped font-weight-bold bg-success"
                                                    style={{ width: "77%" }}>
                                                    77%
                                    </div>
                                            </div>
                                            <h6 class="mb-3">IDE</h6>
                                            <div class="progress mb-4" style={{ height: "20px" }}>
                                                <div class="progress-bar progress-bar-striped font-weight-bold bg-warning"
                                                    style={{ width: "11%" }}>
                                                    12%
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-12">
                                        <h4 class="text-muted mb-3 p-3">Tasks:</h4>
                                        <div class="container-fluid bg-white">
                                            <div class="row  mb-4 task-border align-items-center">
                                                <div class="col-1">
                                                    <input type="checkbox" checked />
                                                </div>
                                                <div class="col-sm-9 col-8">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, corporis.
                                    </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" title="<h6>Edit</h6>" data-html="true"
                                                        data-placement="top">
                                                        <i class="fas fa-edit fa-lg text-success"></i>
                                                    </a>
                                                </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" title="<h6>Delete</h6>" data-html="true"
                                                        data-placement="top">
                                                        <i class="fas fa-trash-alt fa-lg text-danger"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="container-fluid bg-white">
                                            <div class="row mb-4 task-border align-items-center">
                                                <div class="col-1">
                                                    <input type="checkbox" checked />
                                                </div>
                                                <div class="col-sm-9 col-8">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, nesciunt?
                                    </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" title="<h6>Edit</h6>" data-html="true"
                                                        data-placement="true">
                                                        <i class="fas fa-edit fa-lg text-success"></i></a>
                                                </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" title="<h6>Delete</h6>" data-html="true"
                                                        data-placement="true">
                                                        <i class="fas fa-trash-alt fa-lg text-danger"></i></a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="container-fluid bg-white">
                                            <div class="row mb-4 task-border align-items-center">
                                                <div class="col-1">
                                                    <input type="checkbox" checked />
                                                </div>
                                                <div class="col-sm-9 col-8">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt.
                                    </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Edit</h6>">
                                                        <i class="fas fa-edit fa-lg text-success"></i>
                                                    </a>
                                                </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Delete">
                                                        <i class="fas fa-trash alt fa-lg text-danger"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="container-fluid bg-white">
                                            <div class="row mb-4 task-border align-items-center">
                                                <div class="col-1">
                                                    <input type="checkbox" checked />
                                                </div>
                                                <div class="col-sm-9 col-8">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt.
                                    </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Edit</h6>">
                                                        <i class="fas fa-edit fa-lg text-success"></i>
                                                    </a>
                                                </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Delete">
                                                        <i class="fas fa-trash alt fa-lg text-danger"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="container-fluid bg-white">
                                            <div class="row mb-4 task-border align-items-center">
                                                <div class="col-1">
                                                    <input type="checkbox" checked />
                                                </div>
                                                <div class="col-sm-9 col-8">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nesciunt.
                                    </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Edit</h6>">
                                                        <i class="fas fa-edit fa-lg text-success"></i>
                                                    </a>
                                                </div>
                                                <div class="col-1">
                                                    <a href="" data-toggle="tooltip" data-html="true" data-placement="top"
                                                        title="<h6>Delete">
                                                        <i class="fas fa-trash alt fa-lg text-danger"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row">
                                    <div class="col-xl-7">
                                        <h4 class="text-muted mb-4">Recent Customer Activites</h4>
                                        <div id="accordion">
                                            <div class="card">
                                                <div class="card-header">
                                                    <button class="btn btn-block bg-dark text-light text-left"
                                                        data-toggle="collapse" data-target="#collapseone">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                            class="mr-3 rounded" height="50" width="50" alt="" />
                                            John Posted A Comment
                                        </button>
                                                </div>
                                                <div class="collapse" id="collapseone" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum natus
                                                        distinctio aliquam autem nulla! Quis in nemo voluptatum eos autem?
                                        </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <button class="btn btn-dark btn-block text-light text-left"
                                                        data-toggle="collapse" data-target="#collapsetwo">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                            width="50" height="50" class="rounded mr-3" alt="" />
                                            Bush Posted A Comment
                                        </button>
                                                </div>
                                                <div class="collapse" id="collapsetwo" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos perspiciatis
                                                        eaque dolor eum nihil minima incidunt alias omnis id earum.
                                        </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <button class="btn btn-dark btn-block text-light text-left"
                                                        data-toggle="collapse" data-target="#collapsethree">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                            width="50" height="50" class="mr-3 rounded" alt="" />
                                            Bueon Posted A Comment
                                        </button>
                                                </div>
                                                <div class="collapse" id="collapsethree" data-parent="#accordian">
                                                    <div class="card-body">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, illum
                                                        laudantium. Voluptatum, repellat aspernatur veritatis in ad dignissimos
                                                        aliquam qui?
                                        </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header">
                                                    <button class="btn btn-dark btn-block text-light text-left"
                                                        data-toggle="collapse" data-target="#collapsethree">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                            width="50" height="50" class="mr-3 rounded" alt="" />
                                            Lyon Posted A Comment
                                        </button>
                                                </div>
                                                <div class="collapse" id="collapsethree" data-parent="#accordian">
                                                    <div class="card-body">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, illum
                                                        laudantium. Voluptatum, repellat aspernatur veritatis in ad dignissimos
                                                        aliquam qui?
                                        </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-header">
                                                    <button class="btn btn-dark btn-block text-light text-left"
                                                        data-toggle="collapse" data-target="#collapsethree">
                                                        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                            width="50" height="50" class="mr-3 rounded" alt="" />
                                            Miam Posted A Comment
                                        </button>
                                                </div>
                                                <div class="collapse" id="collapsethree" data-parent="#accordian">
                                                    <div class="card-body">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, illum
                                                        laudantium. Voluptatum, repellat aspernatur veritatis in ad dignissimos
                                                        aliquam qui?
                                        </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-xl-5 mt-5">
                                        <div class="card-rounded">
                                            <div class="card-body">
                                                <h5 class="text-muted text-center mb-2">Quick Status Post</h5>
                                                <ul class="list-inline text-center py-3">
                                                    <li class="list-inline-item">
                                                        <a href=""><i class="fas fa-pencil-alt text-success"></i>
                                                            <span class="h6 text-muted">Status</span></a>
                                                    </li>
                                                    <li class="list-inline-item py-3">
                                                        <a href=""><i class="fas fa-camera text-primary"></i>
                                                            <span class="h6 text-muted">Camera</span></a>
                                                    </li>
                                                    <li class="list-inline-item py-3">
                                                        <a href=""><i class="fas fa-map-marker-alt text-primary"></i>
                                                            <span class="h6 text-muted">CheckIn</span></a>
                                                    </li>
                                                </ul>
                                                <form action="">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control py-2"
                                                            placeholder="What's Your Status" />
                                                        <button
                                                            class="mt-3 py-2 mb-4 btn btn-primary btn-block font-weight-bold text-uppercase text-whtie">Submit
                                                Post</button>
                                                    </div>
                                                </form>
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="card bg-light">
                                                            <i
                                                                class="far fa-calendar-alt m-auto fa-8x text-warning d-block py-3"></i>
                                                            <div class="card-body">
                                                                <div
                                                                    class="card-text text-center text-dark font-weight-bold text-uppercase">
                                                                    Thursday,March 21
                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="card bg-light pb-3">
                                                            <i class="far fa-clock fa-8x d-block text-danger py-3 m-auto"></i>
                                                            <div class="card-body">
                                                                <div
                                                                    class="card-text text-uppercase text-center text-dark font-weight-bold">
                                                                    11:03 AM
                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <footer class="bg-dark text-white">
                    <div class="container-fluid mt-5">
                        <div class="row">
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row">
                                    <div class="col-lg-6 pt-3">
                                        <ul class="list-inline">
                                            <li class="list-inline-item mr-2">
                                                <a href="#" class="text-white">Amir Mohammed</a>
                                            </li>
                                            <li class="list-inline-item mr-2">
                                                <a href="#" class="text-white">Contact</a>
                                            </li>
                                            <li class="list-inline-item mr-2">
                                                <a href="" class="text-white">Support</a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="#" class="text-white">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 text-center pt-3">
                                        <p>&copy; 2019 Made with <i class="fas fa-heart text-danger"></i> By <span
                                            class="text-success"></span> Amir Mohammed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

index.propTypes = {

};

export default index;