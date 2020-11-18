import React, { Component } from 'react';
import Style from './AddPost.css'
import PropTypes from 'prop-types';
import Avatar from '../../avatar.jpg';


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "Mi xao",
                description: "Nguyen lieu: Mi + Trung ga",
                authorId: "5fa7edd8869c07126058a867",
                createdAt: "2020-11-08T01:11:18.965Z",
                deletedAt: "",
                editedAt: "",
                thumbnail: {
                    url: "/images/mongodb.png",
                    caption: "cong thuc"
                },
                album: [
                    {
                        url: "/images/anh1.png",
                        caption: "cong thuc"
                    },
                    {
                        url: "/images/anh2.png",
                        caption: "ket qua"
                    }
                ],
                videos: [
                    {
                        url: "/images/video.mp3",
                        caption: "cach lam"
                    }
                ],
                comments: [
                    "5fa7f3aa108cb725f035f21a",
                    "5fa7efe5869c07126058a868"
                ],
                likeUserIds: [
                    "5fa7f3aa108cb725f035f21a",
                    "5fa7efe5869c07126058a868"
                ],
                state: "Da dang",
                hashtagIds: "5fa75587997be636b8f92cb3"
            }
        };
        this.onAddImages = this.onAddImages.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
    onSubmit(event) {
        event.preventDefault();
        console.log('clicked Post');
        const {
            title,
            description,
            authorId,
            createdAt,
            deletedAt,
            editedAt,
            thumbnail,
            album,
            videos,
            comments,
            likeUserIds,
            state,
            hashtagIds,
        } = this.state.post;
        fetch('api/post', {
            method: "POST",
            body: JSON.stringify({
                title: title,
                description: description,
                authorId: authorId,
                createdAt: createdAt,
                deletedAt: deletedAt,
                editedAt: editedAt,
                thumbnail: thumbnail,
                album: album,
                videos: videos,
                comments: comments,
                likeUserIds: likeUserIds,
                state: state,
                hashtagIds: hashtagIds
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
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