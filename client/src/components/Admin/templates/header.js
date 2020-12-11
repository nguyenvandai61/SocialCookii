import React, { Component } from 'react';
import SideBar from './Sidebar'

class templates extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://kit.fontawesome.com/a076d05399.js";
        script.async = true;

        document.body.appendChild(script);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {

        return (
                <nav class="navbar navbar-expand-md navbar-light">
                    <button class="navbar-toggler ml-auto mb-2 bg-light" data-toggle="collapse" data-target="#myNavbar"><span
                        class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        {/* <!-- sidebar starts --> */}
                        <SideBar/>
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


        );
    }
}

templates.propTypes = {

};

export default templates;