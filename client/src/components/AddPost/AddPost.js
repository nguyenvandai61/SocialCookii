import React, { Component } from 'react';
import Style from './AddPost.css'
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg';


class AddPost extends Component{
    constructor(props){
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
        return(
            <div align="center" className = "add-post">
                <h1>Tạo bài viết</h1>
                <form action="" method="">
                    <div class="header">
                        <img src={Avatar} alt="img" height="100px" width="100px" class="avatar"/>
                        <h2>Your Name</h2>
                    </div>
                    <div>
                        <textarea rows="9" cols="70"> 
                            Bạn đang muốn chia sẻ gì thế?
        
                        </textarea> <br/>
                        <i class="fas fa-images"></i> &ensp;
                        <i class="fas fa-user-plus"></i> &ensp;
                        <i class="fas fa-map-marker-alt"></i> 
                    </div>
                    
                    <input type="submit" value="Đăng" />
                </form>
            </div>
        );
    }
}
AddPost.propTypes = {

};

export default AddPost;