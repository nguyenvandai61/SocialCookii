import React, { Component } from 'react';
import Style from './AddPost.css'
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg';


class AddPost extends Component {
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
            <div class="container new-post">
                <div class="row">
                    <div class="col-md-6 new-post-left">
                        <div class="big-thumbnail">
                            <form method="post" action="#" id="#">
                                <div class="form-group files color">
                                    <input type="file" class="form-control" multiple="" />
                                </div>
                            </form>
                        </div>
                        <div class="thumbnail">

                        </div>
                        <div class="post-options">
                            <button type="post">
                                <i class="fas fa-images" style={{ color: "rgb(64, 91, 247)" }}></i>
                            </button>
                            <button>
                                <i class="fas fa-user-plus" style={{ color: "rgb(28, 83, 23)" }}></i>
                            </button>
                            <button>
                                <i class="fas fa-map-marker-alt" style={{ color: "rgb(255, 74, 74)" }}></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6 new-post-right">
                        <div class="container card-right">
                            <div class="title-right">
                                <input type="text" placeholder="Tạo tiêu đề" />
                            </div>
                            <div class="user">
                                <img src={Avatar} alt="img" height="50px" width="50px" class="avatar" />
                                <span>Phan Vu</span>
                            </div>
                            <div class="post-content custom-textarea">
                                <textarea rows="1" placeholder="Hãy mô tả món ăn của bạn"></textarea>
                            </div>
                            <div class="post-recipe custom-textarea">
                                <textarea rows="1" placeholder="Hãy chia sẽ công thức món ăn của bạn"></textarea>
                            </div>
                        </div>
                        <input class="btn btn-primary" type="submit" value="Đăng" />
                    </div>
                </div>
            </div>
        );
    }
}
AddPost.propTypes = {

};

export default AddPost;