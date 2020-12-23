import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
import { fetchFollow, getIdFromJwtToken } from '../../controller/UserJwtController'
class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                thumbnails: [],
                likeUserIds: [],
                comments: []
            },
            isFollowed: false,
            listUserCache: []
        }
        this.onFollow = this.onFollow.bind(this)
        // userName = localStorage.getItem('userName');
        // console.log(userName)
    }


    onFollow(e) {
        e.preventDefault();
        const userId = getIdFromJwtToken();
        const authorId = this.state.post.createdBy._id;
        
        fetchFollow(userId, authorId).then(data => {
            const { isFollowed } = this.state
            this.setState({
                isFollowed: !isFollowed,
            })
        })
    }


    loadDefaultPost = () => {
        let post = {
            title: "Bánh xèo",
            description: "Bánh xèo là một món ăn truyền thống thuần túy và rất quen thuộc đối với chúng ta. Tuy nhiên ngày nay, bánh xèo Việt Nam đã trở thành một cái tên đặc biệt. Luôn luôn được nhắc đến bởi nhiều người nước ngoài khi ghé thăm Việt Nam. Bánh xèo cũng được biến tấu nhiều phù hợp với khẩu vị, phong tục của từng địa phương khác nhau. Nhưng đều giữ chung cho món ăn này một hương vị riêng. Để lại cho người thưởng thức nhiều cảm xúc khó quên khi dùng qua dù chỉ là một lần.",
            createdBy: {
                id: 1,
            },
            createdAt: Date.now(),
            deletedAt: "",
            editedAt: "",
            thumbnails: [
                "image/posts/base-image-16069669499930.jpeg",
                "image/posts/base-image-16069669500171.jpeg"
            ],
            recipe: "2 kg nước",
            comments: [
                {
                    id: 2,

                    time: Date.now(),
                    content: "Nhìn có vẻ ngon đấy",
                    replyComments: [
                        {
                            id: 3,
                            time: Date.now(),
                            content: "Ukm ngon đấy"
                        },
                        {
                            id: 4,
                            time: Date.now(),
                            content: "Haha"
                        }
                    ]
                },
                {
                    id: 5,
                    time: Date.now(),
                    content: "Nhìn có vẻ ngon đấy",
                    replyComments: [
                        {
                            id: 3,
                            time: Date.now(),
                            content: "Ukm ngon đấy"
                        },
                        {
                            id: 1,
                            time: Date.now(),
                            content: "Cảm ơn"
                        }
                    ]
                }
            ],
            likeUserIds: [
                "5fa7f3aa108cb725f035f21a",
                "5fa7efe5869c07126058a868"
            ],
            hashtagIds: "5fa75587997be636b8f92cb3"
        }

        let users = {
            1: {
                name: "Đại Nguyễn",
                avatar: "image/default/avatar/koala.jpg",
            },
            2: {
                avatar: "image/default/avatar/fox.jpg",
                name: "Phan Vũ",
            },
            3: {
                avatar: "image/default/avatar/sheep.png",
                name: "Dương Phạm",
            },
            4: {
                avatar: "image/default/avatar/rabbit.jpg",
                name: "Trung Châu",
            },
            5: {
                avatar: "image/default/avatar/bear-russian.png",
                name: "Công Trần",
            }
        }
        Object.assign(post.createdBy, users[post.createdBy.id]);
        post.comments.map(comment => {
            Object.assign(comment, users[comment.id]);
            comment.replyComments.map(rComment => {
                Object.assign(rComment, users[rComment.id]);
            })
        })

        this.setState({ post: post });
    }
    fetchUserInfo = (id) => {
        console.log(id);
        return fetch("/api/user/userInfo/" + id).then(res => {
            return res.json();
        }).then(user => {
            return user;
        })
    }
    fetchPost = async () => {
        let id = window.location.pathname.split('/')[2];
        return await fetch('/api/post/' + id, {
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => {
            if (res.status == 200) {
                console.log(res)
                return res.json()
            }
        }).then(data1 => data1[0])
            .then(data => {
                console.log(data);
                this.setState({ post: data })
                this.fetchUserInfo(data.createdBy).then(user => {
                    data.createdBy = user;
                    this.setState({ post: data });
                    return data;
                });
            })
    }


    replaceImage = (e) => {
        document.querySelector(".big-thumbnail").querySelector("img").src = e.target.src;
        console.log(e.target.src);
    }
    componentWillMount() {
        // this.loadDefaultPost();
        this.fetchPost();
    }

    componentDidMount() {
        // this.addAuthorText();

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        const { post, isFollowed } = this.state;
        console.log(post);
        let userId = getIdFromJwtToken();
        return (

            <div className="detail-post">
                <div className="left">
                    <div className="big-thumbnail frame">
                        {
                            (post.thumbnails) ? (<img src={"/" + post.thumbnails[0]} />) : ''
                        }
                    </div>
                    <div className="thumbnails">
                        {
                            post.thumbnails.map((thumbnail, index) => {
                                if (thumbnail) {
                                    return (<div className="thumbnail" key={index}>
                                        <img src={"/" + thumbnail} onClick={this.replaceImage} />
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div className="right">
                    <h1>{post.title}</h1>
                    <div style={{ wordBreak: 'break-word', display: 'inline-block' }} className="editor" dangerouslySetInnerHTML={{ __html: post.description }} />
                    <div className="info">
                        <div className="col-sm-9 post-avatar">
                            <img src={post.createdBy ? "/" + post.createdBy.avatar : ""} alt="" height="60px" width="60px" className="avatar" />
                            <h2>{post.createdBy ? post.createdBy.fullname : ""}</h2>
                        </div>

                        {

                            (post.createdBy && post.createdBy._id != userId) ?
                                (
                                    <div className="col-sm-3">
                                        <input className="follow"
                                            onClick={this.onFollow}
                                            style={{ width: "100px" }}
                                            type="submit"
                                            value={isFollowed ? "Đã theo dõi" : "Theo dõi"} />
                                    </div>
                                )
                                : ""
                        }


                    </div>
                    <div className="button-like">
                        <i className="fas fa-heart"></i>
                        <span>Yêu thích</span>  &ensp;
                    </div> <br />
                    <span>{post.likeUserIds.length} Lượt yêu thích</span>
                    <h3>Nguyên liệu</h3>
                    <div className="content1">
                        {post.recipe}
                    </div>

                    <div className="comment-wrapper">
                        <div>
                            <h2>Comments</h2>
                            <form>
                                <div className="cmt">
                                    <input type="text" placeholder="Thêm nhận xét" /> <br />
                                    <button>Send</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            {
                                post.comments.map((comment, index) => {
                                    console.log(post);
                                    return (
                                        <li key={index}>
                                            <div className="comment-main-level">
                                                <div className="comment-box">
                                                    <div className="comment-head">
                                                        <div className="comment-avatar"><img src={comment.avatar} alt="" /></div>

                                                        <h6 className={"comment-name " + (comment._id == post.createdBy._id ? 'by-author' : '')}><a href="">{comment.name}</a></h6>
                                                        <span></span>
                                                        <i className="fa fa-reply"></i>
                                                        <i className="fa fa-heart"></i>
                                                    </div>
                                                    <div className="comment-content">
                                                        {comment.content}
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className="comments-list reply-list">
                                                {
                                                    (comment.replyComments) ? comment.replyComments.map((replyComment, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <div className="comment-box">
                                                                    <div className="comment-head">
                                                                        <div className="comment-avatar"><img src={replyComment.avatar} alt="" /></div>
                                                                        <h6 className={"comment-name " + (replyComment._id == post.createdBy._id ? 'by-author' : '')}>
                                                                            <a href="#">{replyComment.name}</a></h6>
                                                                        <span>hace 10 minutos</span>
                                                                        <i className="fa fa-reply"></i>
                                                                        <i className="fa fa-heart"></i>
                                                                    </div>
                                                                    <div className="comment-content">
                                                                        {replyComment.content}
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    }) : ""
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

DetailPost.propTypes = {

};

export default DetailPost;