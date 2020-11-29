import React, { Component } from 'react';
import Avatar from '../../avatar.jpg';
import './AddPost.css';
import '../../utils/Base64Image';

import Base64Image from '../../utils/Base64Image';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createdAt: '',
            thumbnails: [],
            title: '',
            description: '',
            recipe: '',
        };
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

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    handleChange = e => {
        let { name, value } = e.target

        this.setState({
            [name]: value
        })
    }
    // function to capture base64 format of an image
   
    getThumbnailsObj = async (files) => {
        for (let i = 0; i < files.length; i++) {
            Base64Image.getImageObj(files[i], i).then(thumbnail => {
                this.state.thumbnails.push(thumbnail);
                this.forceUpdate();
            })
        }
    }
    postData = () => {
        this.setState({
            createdAt: Date.now()
        })
        let body = this.state;
        fetch('/api/post/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                document.querySelector('.success-create-post').style.display = 'block';
                res.json().then(data => {

                })
            }
            else {
                document.querySelector('.fail-create-post').style.display = 'block';
            }
        })
    }

    loadImageFile = async (event) => {
        console.log("load image");
        var thumbnailsWrapper = document.getElementsByClassName('thumbnails')[0];
        if (!thumbnailsWrapper) return;
        let thumbnails = event.target.files;
        this.getThumbnailsObj(thumbnails);
    }
    render() {
        let { thumbnails } = this.state;
        console.log(thumbnails.length)
        var tbs = [];
        thumbnails.map(thumbnail => {
            tbs.push(thumbnail.img.data)
        })
        return (
            <div className="container new-post">
                <div class="alert alert-success success-create-post" role="alert">
                    This is a success alert—check it out!
                    </div>
                <div class="alert alert-danger fail-create-post" role="alert">
                    This is a danger alert—check it out!
                </div>
                <div className="row">
                    <div className="col-md-6 new-post-left">
                        <form method="post" action="#" id="#">
                            <div className="form-group files color">
                                <input type="file" className="form-control" multiple
                                    onChange={this.loadImageFile} />
                            </div>
                        </form>
                        <div className="big-thumbnail frame">
                            {
                                (tbs[0]) ? (<img src={tbs[0]} />) : ''
                            }
                        </div>
                        <div className="thumbnails">
                            {
                                tbs.map((image, index) => {
                                    if (index > 0 && image) {
                                        return (<div className="thumbnail" key={index}>
                                            <img src={image} />
                                            <i className="fas fa-times"></i>
                                        </div>)
                                    }
                                })
                            }
                        </div>
                        <div className="post-options">
                            <button type="post">
                                <i className="fas fa-images" style={{ color: "rgb(64, 91, 247)" }}></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus" style={{ color: "rgb(28, 83, 23)" }}></i>
                            </button>
                            <button>
                                <i className="fas fa-map-marker-alt" style={{ color: "rgb(255, 74, 74)" }}></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 new-post-right">
                        <div className="container card-right">
                            <div className="title-right">
                                <input type="text" placeholder="Tạo tiêu đề"
                                    name="title"
                                    onChange={this.handleChange} />
                            </div>
                            <div className="user">
                                <img src={Avatar} alt="img" height="50px" width="50px" className="avatar" />
                                <span>Phan Vu</span>
                            </div>
                            <div className="post-content custom-textarea">
                                <textarea rows="1" placeholder="Hãy mô tả món ăn của bạn"
                                    name="description"
                                    onChange={this.handleChange}></textarea>
                            </div>
                            <div className="post-recipe custom-textarea">
                                <textarea rows="1" placeholder="Hãy chia sẽ công thức món ăn của bạn"
                                    name="recipe"
                                    onChange={this.handleChange}></textarea>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Đăng" onClick={this.postData} />
                    </div>

                </div>
            </div>
        );
    }
}
AddPost.propTypes = {

};

export default AddPost;