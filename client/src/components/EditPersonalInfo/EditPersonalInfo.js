import React, { Component } from 'react';
import Style from './EditPersonalInfo.css';
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg';
import Base64Image from '../../utils/Base64Image';

class EditPersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    showAvatarDialog = () => {
        document.getElementById('selectedFile').click()
    }
    changeNewAvatar = (event) => {
        let avatarFile = event.target.files[0];
        console.log(avatarFile);
        document.querySelector('.avatar-img-wrapper img').src = avatarFile;
        Base64Image.file2Base64(avatarFile).then(avatar => {
            let user = {...this.state.user}
            user.avatar = avatar;
            this.setState({user: user});
        });
    }

    render() {
        const { user } = this.state
        return (
            <div className="edit-personal-info">
                <a href="/personalInfo" ><i class="far fa-arrow-alt-circle-left"></i></a>
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
                                <h3>Chỉnh sửa hồ sơ</h3>
                                <p>Mọi người sẽ biết đến bạn qua thông tin bên dưới </p>
                            </div>
                            <div class="grid2">

                                <input className="btn btn-danger" type="button" value="Hủy" />
                                <input className="btn btn-success" type="button" value="Đã xong" />
                            </div>
                        </div>
                        <input type="file" id="selectedFile" style={{ display: "none" }} onChange={this.changeNewAvatar}/>
                        <div >
                            <div className="avatar-wrapper">
                                <div className="avatar-img-wrapper">
                                    <img src={user.avatar} alt="" height="100px" width="100px" />
                                </div>
                                <p><button className="change" onClick={this.showAvatarDialog}>
                                    <i className="fas fa-pen"></i>
                                </button></p>
                            </div>
                        </div>
                        <div class="form-horizontal">
                            <div class="form-group">
                                <label class="control-label" for="username">Username</label>
                                <div class="controls">
                                    <input type="text" id="username" name="username" placeholder="" class="input-xlarge" />
                                    <p class="help-block">Username can contain any letters or numbers, without spaces</p>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label" for="email">E-mail</label>
                                <div class="controls">
                                    <input type="text" id="email" name="email" placeholder="" class="input-xlarge" />
                                    <p class="help-block">Please provide your E-mail</p>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label" for="password">Password</label>
                                <div class="controls">
                                    <input type="password" id="password" name="password" placeholder="" class="input-xlarge" />
                                    <p class="help-block">Password should be at least 4 characters</p>
                                </div>
                            </div>

                            <div class="control-group">
                                <label class="control-label" for="password_confirm">Password (Confirm)</label>
                                <div class="controls">
                                    <input type="password" id="password_confirm" name="password_confirm" placeholder="" class="input-xlarge" />
                                    <p class="help-block">Please confirm password</p>
                                </div>
                            </div>
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