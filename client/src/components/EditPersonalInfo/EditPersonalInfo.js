import React, { Component } from 'react';
import Style from './EditPersonalInfo.css'
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg'

class EditPersonalInfo extends Component {
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
            <div style = {Style}>
                <a href="personalInfo.html" ><i class="far fa-arrow-alt-circle-left"></i></a>
                <div class="content">
                    <div class="grid-item">
                        <p><i class="fas fa-pen"></i>&ensp;<a href="">Chỉnh sửa cá nhân</a></p>
                        <p><i class="fas fa-user"></i>&ensp;<a href="">Cài đặt tài khỏan</a></p>
                        <p><i class="fas fa-globe"></i>&ensp;<a href="">Xác nhận quyền sở hữu</a></p>
                        <p><i class="fas fa-bell"></i>&ensp;<a href="">Thông báo</a></p>
                        <p><i class="fas fa-lock"></i>&ensp;<a href="">Quyền riêng tư và dữ liệu</a></p>
                        <p><i class="fas fa-shield-alt"></i>&ensp;<a href="">Bảo mật</a></p>
                        <p><i class="fas fa-th"></i>&ensp;<a href="">Ứng dụng</a></p>
                    </div>

                    <div class="grid-item">
                        <div class="grid2">
                            <div>
                                <h1>Chỉnh sửa hồ sơ</h1>
                                <p>Mọi người sẽ biết đến bạn qua thông tin bên dưới </p>
                            </div>
                            <div class="grid2">

                                <input type="button" value="Hủy" />
                                <input type="button" value="Đã xong" />
                            </div>
                        </div>
                        <div>
                            <label>Ảnh</label> <br />
                            <img src={Avatar} alt="" height="100px" width="100px" /><br />
                            <p><input type="button" value="Thay đổi" class="change" /></p>
                        </div>
                        <div class="info">
                            <label>Tên</label><br />
                            <p><input type="text" value="" /></p>

                            <label>Họ</label><br />
                            <p><input type="text" value="" /></p>

                            <label>Tên người dùng</label><br />
                            <p><input type="text" value="" /></p>
                            <label>Giới thiệu hồ sơ của bạn</label><br />
                            <p><input type="text" value="" /></p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

EditPersonalInfo.propTypes = {

};

export default EditPersonalInfo;