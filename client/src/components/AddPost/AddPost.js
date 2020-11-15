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
            <div class="new-post">
                <h1>Tạo bài viết</h1>
                <form action="" method="">
                    <div>
                        <textarea class="post-area" cols="70" placeholder="Bạn đang muốn chia sẻ gì thế?">
                        </textarea>
                        <div class="buttons-wrapper">
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
                            <input class="submit-btn" type="submit" value="Đăng" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
AddPost.propTypes = {

                    };

export default AddPost;