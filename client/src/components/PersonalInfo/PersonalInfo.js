import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Masonry from '../Masonry/Masonry'
import Avatar from '../../avatar.jpg'
import './PersonalInfo.css'
class PersonalInfo extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

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
            <div>
                <div align="center" className="avatar">
                    <div id="avatar-frame">
                        <img src={Avatar} alt="img" style={{height: "130px", width: "130px"}}/>
                    </div>
                    <h2>Your name</h2>
                    <p>@gmail</p>
                    <p>Người theo dõi - Người đang theo dõi</p>
                </div>
                <div class="edit" style={{height: "48px", width: "48px"}}>
                    <a href="edit_personalInfo.html"><i class="fas fa-pen"></i></a>
                </div>
                <h2 align="center">Bài viết lưu trữ</h2>
                <Masonry/>
            </div>
        );
    }
}

PersonalInfo.propTypes = {

};

export default PersonalInfo;