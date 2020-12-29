import React, { Component } from 'react';
import Avatar from '../../avatar.jpg';
import './AddPost.css';
import '../../utils/Base64Image';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

    // get data from ckeditor 5
    onCashange  = data => { 
        this.setState({
            description : data.getData()
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
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        
        let body = this.state;
        fetch('/api/post/', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'bearer '+ token
            },
            body: JSON.stringify(body)
        }).then(res => {
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
                <div className="row mt-2">
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
                        <input className="btn btn-primary mt-5" type="submit" value="Đăng" onClick={this.postData} />
                    </div>
                    <div className="col-md-6 new-post-right">
                        <div className="container card-right">
                            <div className="user">
                                <img src={Avatar} alt="img" height="50px" width="50px" className="avatar" />
                                <span>Phan Vu</span>
                            </div>
                            <div className="title-right">
                                <input type="text" placeholder="Tạo tiêu đề"
                                    name="title"
                                    onChange={this.handleChange} />
                            </div>
                        
                            <div className="App">
                               
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Mô tả món ăn và công thức cho mọi người</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                    } }                                
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        this.onCashange( editor );
                                        console.log( { event, editor, data } );

                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                />
                                
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        );
    }
}
AddPost.propTypes = {

};

export default AddPost;