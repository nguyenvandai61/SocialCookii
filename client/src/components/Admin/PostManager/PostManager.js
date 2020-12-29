import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css'

import Header from '../templates/header';
import Footer from '../templates/footer';
//import AddUser from './AddUser';
class indexPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportedPosts: {
                size: 0,
                data: [],
                pagination: {
                    current: 1,
                    nPerPage: 6
                }
            }
            
        }
    }
    
    getPostInfo = () => {
        fetch('/api/post', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    let posts = { ...this.state.reportedPosts }
                    posts.size = data.length;
                    posts.data = data;
                    this.setState({ reportedPosts: posts })
                })
            }
            else {

            }
        })
    }
    changePostPage = () => {

    }
    loadData = () => {
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
        let { reportedPosts } = this.state;
        console.log(reportedPosts);
        const indexOfLast = reportedPosts.pagination.current * reportedPosts.pagination.nPerPage;
        const indexOfFirst = indexOfLast - reportedPosts.pagination.nPerPage;
        let currentPosts = reportedPosts.data.slice(indexOfFirst, indexOfLast);
        console.log(currentPosts)
        let renderReportedPosts = currentPosts.map((post, index) => {
            const { _id, title, createdBy, createdAt } = post;
            console.log("_id " + _id)
            const url = "/admin/post-manager/detailReportedPost";
            return (<tr>
                <td>{indexOfFirst + index + 1}</td>
                <td>{title}</td>
                <td>{createdBy}</td>
                <td>{createdAt}</td>
                <td>
                    <Link to={url}>
                        <a href="" title="" class="btn btn-primary"><i class="fa fa-edit "></i> Xem chi tiết</a>
                    </Link>
                    
                </td>
            </tr>)
        })
        let nPage = Math.ceil(reportedPosts.size / reportedPosts.pagination.nPerPage);
        let renderPostsPagi = [];
        for (let i = 0; i < nPage; i++)
            renderPostsPagi.push(
                <li class="page-item active"><a href="#" class="page-link py-2 px-3">{i + 1}</a></li>
            )

        console.log(renderReportedPosts);
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






                <section>
                    <div class="container-fluid mt-5">
                        <div class="row">
                            
                            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto">
                                <div class="row ">
                                    <div class="col-xl-6 col-12 mb-4 mb-xl-0">
                                        <h2 class="text-muted text-center mb-5">Reported Posts</h2>
                                        <table class="table table-striped bg-light text-center">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Title</th>
                                                    <th>Created by</th>
                                                    <th>CreatedAt</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderReportedPosts}
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

                <Footer />










            </div>
        );
    }
}

indexPost.propTypes = {

};

export default indexPost;