import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/admin/">
                            <a href="#" class="nav-link text-white p-2 mb-2 current"><i
                                class="fas fa-home fa-lg mr-3 text-white"></i>DashBoard</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                            class="fas fa-hashtag"></i>&emsp;Hashtags</a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white p-2 mb-2 sidebar-link"><i class="fas fa-copy"></i>&emsp;Posts</a>
                    </li>
                    <li class="nav-item">
                        <Link to="/admin/user">
                            <a href="#" class="nav-link p-2 mb-2 sidebar-link text-white"><i
                                class="fas fa-users"></i>&emsp;Users</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white p-2 mb-2 sidebar-link"><i
                            class="fas fa-chart-line fa-lg mr-3 text-white"></i>Comments</a>
                    </li>

                </ul>
            </div>

        );
    }
}

templates.propTypes = {

};

export default templates;