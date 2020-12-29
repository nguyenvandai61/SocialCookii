import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
import avatar from '../../image/avatars/avatar.jpg'
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
            comment:{
                postId : "",
                content : "",
                createdAt: "",
                editedAt: "",
                deletedAt:"",
                repliedCommentId:[],
                likeUserIds:[],
                isRepliedComment: false
            },
            repliedComment:{
                postId : "",
                content : "",
                createdAt: "",
                editedAt: "",
                deletedAt:"",
                repliedCommentId:[],
                likeUserIds:[],
                isRepliedComment: true
            },
            nLikePost: 0,
            hasLikePost: false,
            isFollowed : false,
            listUserCache: []
        }
        this.onFollow = this.onFollow.bind(this)
        this.onComment = this.onComment.bind(this)
        //this.onRepliedComment = this.onRepliedComment.bind(this)
        this.onTextBoxComment = this.onTextBoxComment.bind(this);
        this.onTextBoxRepliedComment = this.onTextBoxRepliedComment.bind(this);
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

    onTextBoxRepliedComment(event) {
        let postId = window.location.pathname.split('/')[2];
        this.setState((prevState) => {
            let newComment = Object.assign({}, prevState.repliedComment);
            newComment.postId = postId
            newComment.createdAt = Date.now()
            newComment.content = event.target.value;
            console.log("message" + newComment.content);
            return { repliedComment: newComment }
        })
        console.log("Comment" + this.state.repliedComment)
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
                    this.setState({comment: data})
                    this.fetchPost()
                })
            }
            else {
                console.log("error")
            }
        })
    }


    onRepliedComment(comment) {
        console.log("Press button replied");
        console.log("comment" + this.state.repliedComment.content)
        // //e.preventDefault();
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        let body = this.state.repliedComment;
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
                    this.setState({repliedComment: data})
                    this.UpdateRepliedComment(comment, data)
                    //this.fetchPost()
                })
            }
            else {
                console.log("error")
            }
        })
    }

    UpdateRepliedComment = (comment, repliedComment) => {
        comment.repliedCommentId.push(repliedComment._id);
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        let body = comment;
        fetch('/api/comment/' + comment._id, {
            method: "PUT",
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': 'bearer '+ token
            },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            if (res.status == 200) {
                res.json().then(data => {
                    console.log("repliedComment: " + data.content)
                    this.fetchPost();
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
                data.createdBy = user;
                this.setState({ post: data, nLikePost: data.likeUserIds.length })
                this.setState({hasLikePost: data.likeUserIds.indexOf(getIdFromJwtToken()) !== -1})
                return data;
            });
        })
    }


    replaceImage = (e) => {
        document.querySelector(".big-thumbnail").querySelector("img").src = e.target.src;
        console.log(e.target.src);
    }


    timeSince = (date) =>{

        var seconds = Math.floor((new Date() - date) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
    clickBtnLikeHandler = (e) => {
        let userId = getIdFromJwtToken();
        // Check whether Liked post
        let {nLikePost, hasLikePost} = this.state;
        if (hasLikePost) {
            console.log(e.target);
            nLikePost--;
        } else {
            nLikePost++;
        }

        this.setState({nLikePost: nLikePost, hasLikePost: !hasLikePost});
        
        let postId = window.location.pathname.split('/')[2];
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        // Like or Unlike post
        fetch('/api/post/likePost', {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+ token
            },
            body: JSON.stringify({
                postId: postId,
                likeUserId: userId
            })
        }).then(res => {
            if (res.status == 200) {
                return res.json()
            }
        }).then(data => console.log(data));
    }
    componentWillMount() {
        // this.loadDefaultPost();
        this.fetchPost();
    }

    componentDidMount() {
        // this.addAuthorText();

    }
    componentWillReceiveProps(props) {
        this.setState({user: props.user}); 
    }
    

    render() {
        const { comment } = this.state;
        const { repliedComment } = this.state;
        const { thumbnails, author, comments } = this.state.post;    
        const { post, isFollowed, nLikePost, hasLikePost } = this.state;
        let userId = getIdFromJwtToken();
        return (
            <div className="detail-post-container">
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
                            <img src={post.createdBy ? "/"+post.createdBy.avatar : ""} alt="" height="60px" width="60px" className="avatar" />
                            <h4>{post.createdBy ? post.createdBy.username : ""}</h4>
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
                    <div className="button-like" onClick={this.clickBtnLikeHandler}>
                        <i className="fas fa-heart"></i>
                        <span>{hasLikePost?"Không thích":"Thích"}</span>  &ensp;
                    </div> <br />
                    <span>{nLikePost} Lượt yêu thích</span>
                    
                    <div>                          
                        {/* <form> */}
                            <div className="cmt">
                                <input 
                                    type="text" 
                                    placeholder="Thêm nhận xét" 
                                    onChange={this.onTextBoxComment}
                                    value={comment.content}
                                    /> <br />
                                <button onClick={this.onComment}>Send</button>
                            </div>
                        {/* </form>         */}
                    </div>
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
                                                        <div className="comment-avatar"><img src={"/" + comment.userId.avatar} alt="" /></div>
                                                        {/* <div className="comment-avatar"><img src={avatar} alt="" /></div> */}
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
                                                        <a data-toggle="collapse" href={"#collapseReply" + index} role="button" aria-expanded="false" aria-controls={"collapseReply" + index}>
                                                            <i className="fa fa-reply"></i>
                                                        </a>
                                                        <div className="collapse" id={"collapseReply" + index}>                          
                                                            <form>
                                                                <div className="cmt">
                                                                    <input 
                                                                        type="text" 
                                                                        placeholder="Thêm nhận xét" 
                                                                        onChange={this.onTextBoxRepliedComment}
                                                                        value={repliedComment.content}
                                                                        /> <br />
                                                                    <button type="submit" onClick={() => this.onRepliedComment(comment)}>Send</button>
                                                                </div>
                                                            </form>        
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="replied-comment-list">
                                                {
                                                    (comment.repliedCommentId) ? comment.repliedCommentId.map((replyComment, index) => {
                                                        return (
                                                            <div className="comment-box comment-reply" key={index}>
                                                                <div className="comment-head">
                                                                    <div className="comment-avatar"><img src={"/" + replyComment.userId.avatar} alt="" /></div>
                                                                    {/* <div className="comment-avatar"><img src={avatar} alt="" /></div> */}
                                                                    <div className="comment-infor">
                                                                        <div>
                                                                            <h6 className={"comment-name " + (replyComment.userId._id == post.createdBy._id ? 'by-author' : '')}>
                                                                                <a href="">{replyComment.userId.username}</a>
                                                                            </h6>
                                                                            
                                                                        </div>
                                                                        
                                                                        <div className="comment-content">
                                                                            {replyComment.content}
                                                                        </div>
                                                                    </div>    
                                                                </div>
                                                                <div className="interaction">
                                                                    <span></span>
                                                                    <i className="fa fa-heart"></i>
                                                                </div>
                                                            </div>
                                                        )
                                                    }) : ""
                                                }
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </div>
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