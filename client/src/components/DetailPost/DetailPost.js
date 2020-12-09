import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    }

    loadUser = () => {
        let post = {
            title: "Bánh xèo",
            description: "Bánh xèo là một món ăn truyền thống thuần túy và rất quen thuộc đối với chúng ta. Tuy nhiên ngày nay, bánh xèo Việt Nam đã trở thành một cái tên đặc biệt. Luôn luôn được nhắc đến bởi nhiều người nước ngoài khi ghé thăm Việt Nam. Bánh xèo cũng được biến tấu nhiều phù hợp với khẩu vị, phong tục của từng địa phương khác nhau. Nhưng đều giữ chung cho món ăn này một hương vị riêng. Để lại cho người thưởng thức nhiều cảm xúc khó quên khi dùng qua dù chỉ là một lần.",
            author: {
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
        Object.assign(post.author, users[post.author.id]);
        post.comments.map(comment => {
            Object.assign(comment, users[comment.id]);
            comment.replyComments.map(rComment => {
                Object.assign(rComment, users[rComment.id]);
            })
        })

        this.setState({post: post});
    }
    fetchPost = async () => {
        let id = window.location.pathname.split('/')[2];
        console.log("Fetch post")

        return await fetch('/api/post/'+id, {
            headers: { 'Content-Type': 'application/json' },
        }).then(res => {
            // console.log(res.json());
            if (res.status == 200) 
                return res.json()
        }).then(data => {
            console.log(data.data);
            this.setState({post: data.data});
            return data;
        })
    }

    replaceImage = (e) => {
        document.querySelector(".big-thumbnail").querySelector("img").src = e.target.src;
        console.log(e.target.src);
    }
    componentWillMount() {
        this.loadUser();
    }

    componentDidMount() {
        // this.addAuthorText();
        
        this.fetchPost();
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
        const { post } = this.state;
        return (

            <div class="detail-post">
                <div class="left">
                    <div className="big-thumbnail frame">
                        {
                            (post.thumbnails[0]) ? (<img src={"/"+post.thumbnails[0]} />) : ''
                        }
                    </div>
                    <div className="thumbnails">
                        {
                            post.thumbnails.map((thumbnail, index) => {
                                if (thumbnail) {
                                    return (<div className="thumbnail" key={index}>
                                        <img src={"/"+thumbnail} onClick={this.replaceImage}/>
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div class="right">
                    <h1>{post.title}</h1>
                    <p>
                        {post.description}
                    </p>
                    <div class="info">
                        <div class="col-sm-9 post-avatar">
                            <img src={post.author?post.author.avatar:""} alt="" height="60px" width="60px" class="avatar" />
                            <h2>{post.author?post.author.name:""}</h2>
                        </div>
                        <div class="col-sm-3">
                            <input class="follow" style={{ width: "100px" }} type="submit" value="Theo dõi" />
                        </div>

                    </div>
                    <div className="button-like">
                        <i class="fas fa-heart"></i> 
                        <span>Yêu thích</span>  &ensp;
                    </div> <br />
                    <span>10 Lượt yêu thích</span>
                    <h3>Nguyên liệu</h3>
                    <div class="content1">
                        {post.recipe}
                    </div>

                    <div className="comment-wrapper">
                        <div>
                            <h2>Comments</h2>
                            <form>
                                <div class="cmt">
                                    <input type="text" placeholder="Thêm nhận xét" /> <br />
                                    <button>Send</button>
                                </div>
                            </form>
                        </div>
                        <div>
                            {
                                post.comments.map(comment => {
                                    return (
                                        <li>
                                            <div class="comment-main-level">
                                                <div class="comment-box">
                                                    <div class="comment-head">
                                                        <div class="comment-avatar"><img src={comment.avatar} alt="" /></div>
            
                                                        <h6 className={"comment-name " + (comment.id == post.author.id?'by-author':'')}><a href="">{comment.name}</a></h6>
                                                        <span></span>
                                                        <i class="fa fa-reply"></i>
                                                        <i class="fa fa-heart"></i>
                                                    </div>
                                                    <div class="comment-content">
                                                        {comment.content}
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="comments-list reply-list">
                                                {
                                                    comment.replyComments.map(replyComment => {
                                                        return (
                                                            <li>
                                                                <div class="comment-box">
                                                                    <div class="comment-head">
                                                                        <div class="comment-avatar"><img src={replyComment.avatar} alt="" /></div>
                                                                        <h6 className={"comment-name " + (replyComment.id == post.author.id?'by-author':'')}>
                                                                            <a href="#">{replyComment.name}</a></h6>
                                                                        <span>hace 10 minutos</span>
                                                                        <i class="fa fa-reply"></i>
                                                                        <i class="fa fa-heart"></i>
                                                                    </div>
                                                                    <div class="comment-content">
                                                                        {replyComment.content}    
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        )
                                                    })
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