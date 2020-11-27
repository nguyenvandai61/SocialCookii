import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Friend.css';

import Avatar from '../../avatar.jpg';
class Friend extends Component {
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
                <div class="container-following-header">
                    <div id="header">
                        <p class="hover-effect">
                            <a href="following2.html"> Quay lại</a>
                        </p>


                        <h2> &emsp; Tab này của bạn đang trống  &emsp; </h2>

                        <p class="hover-effect">
                            Đã xong
			</p>
                    </div>
                </div>
                <div class="container-following">
                    <div id="tag">
                        <p class="hover-effect">
                            Tất cả
			</p>
			&emsp;
			<p class="hover-effect">
                            Thịnh hành
			</p>
			&emsp;
			<p class="hover-effect">
                            Bánh mì
			</p>
			&emsp;
			<p class="hover-effect">
                            Bún phở
			</p>
                    </div>
                </div>

                <section class="section">
                    <div class="list-account">
                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>

                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>

                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>

                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                        <div class="account">
                            <img src={Avatar} alt="" height="100px" width="100px" />
                            <div class="account__details">
                                jelly-o brownie sweet
					<div>
                                    <span>1,3k Người theo dõi</span>
                                    <button class="hover-effect2">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

Friend.propTypes = {

};

export default Friend;