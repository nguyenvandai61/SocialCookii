import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
import avatar from '../../image/avatars/avatar.jpg'


class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                thumbnails: [],
                likeUserIds: [],
                comments: []
            },
            comment:{
                postId : "",
                content : "",
                createdAt: "",
                editedAt: "",
                deletedAt:"",
                repliedCommentId:[],
                likeUserIds:[]
            },
            isFollowed : false,
            listUserCache: []
        }
        this.onFollow = this.onFollow.bind(this)
        this.onComment = this.onComment.bind(this)
        this.onTextBoxComment = this.onTextBoxComment.bind(this);
        // userName = localStorage.getItem('userName');
        // console.log(userName)
    }

    onTextBoxComment(event) {
        let postId = window.location.pathname.split('/')[2];
        this.setState((prevState) => {
            let newComment = Object.assign({}, prevState.comment);
            newComment.postId = postId
            newComment.createdAt = Date.now()
            newComment.content = event.target.value;
            return { comment: newComment }
        })
        console.log("Comment" + this.state.comment)
    }

    // Follow 
    onFollow(e){
        e.preventDefault();
          // const {authorId} = this.state.post
          const userId = "5fccf11a0fbb1823e0a6a68f"
          const authorId = "5fc08664881dcf2e6456a7de"
          const url = '/api/user/' + userId
          console.log(url)
          fetch(url, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              following: {authorId},
            })
          }).then(res => {
              if (res.status == 200) {
                res.json().then(data => {
                    console.log(data)
                    const {isFollowed} = this.state 
                    this.setState({
                      isFollowed: !isFollowed,
                    })
                })
              } 
              else {

              } 
          })

    }

    //Comment post
    onComment(e){
        e.preventDefault();
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        let body = this.state.comment;
        fetch('/api/comment/', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'bearer '+ token
            },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    console.log("result",data.content)
                    this.fetchPost()
                })
            }
            else {
                console.log("error")
            }
        })
    }

    // Get UserInfor
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
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";

        return await fetch('/api/post/' + id, {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+ token
            },
        }).then(res => {
            if (res.status == 200) {

                //console.log(res)
                return res.json()
            }
        }).then(data1 => data1[0])
        .then(data => {
            console.log(data);
            this.setState({ post: data })
            this.fetchUserInfo(data.createdBy).then(user => {
                //console.log(user.username);
                data.createdBy = user;
                console.log(data);
                this.setState({ post: data });
                // // console.log(data1.data);
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
        const { post } = this.state;
        const { comment } = this.state
        const { thumbnails, author, comments } = this.state.post;
        const {isFollowed} = this.state 
        var status = "Theo dõi"
        if(isFollowed){
            status = "Đã theo dõi"
        }
        //console.log(post);
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
                    <div style={{wordBreak:'break-word',display:'inline-block'}} className="editor" dangerouslySetInnerHTML={{__html:post.description}}/>
                    <div className="info">
                        <div className="col-sm-9 post-avatar">
                            {/* <img src={post.createdBy ? "/"+post.createdBy.avatar : ""} alt="" height="60px" width="60px" className="avatar" /> */}
                            <img src={avatar} alt="" height="60px" width="60px" className="avatar" />
                            <h4>{post.createdBy ? post.createdBy.username : ""}</h4>
                        </div>
                        <div className="col-sm-3">
                            <input className="follow" 
                                    onClick={this.onFollow} 
                                    style={{ width: "100px" }} 
                                    type="submit" 
                                    value={status}/>
                        </div>

                    </div>
                    <div className="button-like">
                        <i className="fas fa-heart"></i>
                        <span>Yêu thích</span>  &ensp;
                    </div> <br />
                    <span>{post.likeUserIds.length} Lượt yêu thích</span>
                    

                    <div className="comment-wrapper">
                        {/* <div>
                            <h2>Comments</h2>
                            <form>
                                <div className="cmt">
                                    <input 
                                        type="text" 
                                        placeholder="Thêm nhận xét" 
                                        onChange={this.onTextBoxComment}
                                        value={comment.content}
                                        /> <br />
                                    <button type="submit" onClick={this.onComment}>Send</button>
                                </div>
                            </form>
                        </div> */}
                        <div class="comment-container">
                            {
                                post.comments.map((comment, index) => {
                                    
                                    return (
                                        <li key={index}>
                                            <div className="comment-main-level">
                                                <div className="comment-box">
                                                    <div className="comment-head">
                                                        {/* <div className="comment-avatar"><img src={comment.userId.avartar} alt="" /></div> */}
                                                        <div className="comment-avatar"><img src={avatar} alt="" /></div>
                                                        <div className="comment-infor">
                                                            <div>
                                                                <h6 className={"comment-name " + (comment.userId._id == post.createdBy._id ? 'by-author' : '')}>
                                                                    <a href="">{comment.userId.username}</a>
                                                                </h6>
                                                            </div>
                                                            
                                                            <div className="comment-content">
                                                                {comment.content}
                                                            </div>
                                                        </div>
                                                        
                                                        
                                                    </div>
                                                    <div className="interaction">
                                                        <span></span>
                                                        <i className="fa fa-heart"></i>
                                                        <i className="fa fa-reply"></i>
                                       
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            {/* <ul className="comments-list reply-list">
                                                {
                                                    (comment.replyComments)?comment.replyComments.map((replyComment, index) => {
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
                                                    }):""
                                                }
                                            </ul> */}
                                        </li>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <h2>Comments</h2>
                            <form>
                                <div className="cmt">
                                    <input 
                                        type="text" 
                                        placeholder="Thêm nhận xét" 
                                        onChange={this.onTextBoxComment}
                                        value={comment.content}
                                        /> <br />
                                    <button type="submit" onClick={this.onComment}>Send</button>
                                </div>
                            </form>
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