import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from 'react-router-dom';
import '../../Admin/style.css'

import Header from '../templates/header';
import Footer from '../templates/footer';
//import AddUser from './AddUser';
class detailReportedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reportedPost: {
            },   
            thumbnail: ""
        }
    }
    
    getPostInfo = () => {
        // let postId = window.location.pathname.split('/')[4];
        let postId = "5feaae4c213bff0dc008972b";
        fetch('/api/post/' + postId, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    this.setState({
                        thumbnail: data[0].thumbnails[0]
                    })
                    this.setState({ reportedPost: data[0] })
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
        let { thumbnail, reportedPost } = this.state;
        // if(reportedPost){
        //     thumbnail = reportedPost.thumbnails[0];
        // }
        
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
                                        <div>
                                            <div>{reportedPost.title}</div>
                                            <div>
                                                {
                                                    (reportedPost.thumbnails) ? (<img src={"/" + reportedPost.thumbnails[0]} />) : ''
                                                }
                                            </div>
                                            <div style={{wordBreak:'break-word',display:'inline-block'}} className="editor" dangerouslySetInnerHTML={{__html:reportedPost.description}}/>
                                            <div>
                                                <button className="btn btn-primary" value="Xóa bài viết"> Xóa bài viết</button>
                                            </div>
                                        </div>
                                        
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

detailReportedPost.propTypes = {

};

export default detailReportedPost;