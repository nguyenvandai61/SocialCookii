import React, { Component } from 'react';
import Style from './EditPersonalInfo.css';
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg';
import Base64Image from '../../utils/Base64Image';

class EditPersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                fullname: '',
                email: '',
                birthday: '',
                gender: '',
                avatar: '',
            }
        }
        this.onTextBoxEmail = this.onTextBoxEmail.bind(this);
        this.onTextBoxUsername = this.onTextBoxUsername.bind(this);
        this.onTextBoxBirthday = this.onTextBoxBirthday.bind(this);;
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeSelectGender = this.onChangeSelectGender.bind(this);
    }

    onChangeSelectGender(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.gender = event.target.value;
            return {user: newUser}
        })
    }

    onTextBoxUsername(event){ 
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.username = event.target.value;
            return {user: newUser}
        })
        console.log(this.state.username);
    }
    
    onTextBoxEmail(event){
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.email = event.target.value;
            return {user: newUser}
        })
    }
    onTextBoxBirthday(event){
        this.setState((prevState) => {
            let newUser = Object.assign({}, prevState.user);
            newUser.birthday = event.target.value;
            return {user: newUser}
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const {user} = this.state;
        let user_id = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user"))._id : "";
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
          fetch('/api/user/' + user_id, {
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'bearer '+ token
            },
            body: JSON.stringify(user)
          }).then(res => {
              console.log(res);
              if (res.status == 200) {
                res.json().then(data => {
                    console.log(data)
                    this.setState({user: data})
                    console.log("ok ")                 
                    window.location.href = "/personalInfo";
                })
              } 
              else {
                console.log("Lỗi cập nhật thông tin");
              } 
          })
    }

    fetchUserInfor = () => {
        let user_id = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user"))._id : "";
          fetch('/api/user/' + user_id, {
            method: "GET",
            headers: { 
                'Content-Type': 'application/json', 
            },
          }).then(res => {
              console.log(res);
              if (res.status == 200) {
                res.json().then(data => {
                    console.log(data)
                    this.setState({user: data[0]})
                    console.log("ok ")                 
                })
              } 
              else {
                console.log("Lỗi lấy thông tin user");
              } 
          })
    }

    componentWillMount() {
        this.fetchUserInfor()
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
                        <p><i class="fas fa-lock"></i>&ensp;<a href="">Quyền riêng tư</a></p>
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
                                <input className="btn btn-success" 
                                    type="button" 
                                    onClick = {this.onSubmit}
                                    value="Đã xong" />
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
                                    <input type="text"
                                        id="username" 
                                        name="username" 
                                        value={user.username}
                                        onChange = {this.onTextBoxUsername}
                                        class="input-xlarge form-control" />
                    
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label" for="email">E-mail</label>
                                <div class="controls">
                                    <input type="text" 
                                        id="email" 
                                        name="email" 
                                        onChange = {this.onTextBoxEmail}
                                        value={user.email}
                                        class="input-xlarge form-control" />
                                   
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label" for="gender">Giới tính</label>
                                <div class="controls">
                                    <select value={user.gender} onChange={this.onChangeSelectGender}  name="gender" class="custom-select" style={{maxWidth: "120px"}}>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                        <option value="2">Other</option>
                                    </select>
                                    
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label" for="password_confirm">Ngày sinh</label>
                                <div class="controls">
                                <input 
                                        name="birthday" 
                                        type="date" 
                                        class="form-control"
                                        value={user.birthday}  
                                        onChange={this.onTextBoxBirthday}
                                        />
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