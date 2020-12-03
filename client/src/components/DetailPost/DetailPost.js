import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "Bánh xèo",
                description: "Bánh xèo là một món ăn truyền thống thuần túy và rất quen thuộc đối với chúng ta. Tuy nhiên ngày nay, bánh xèo Việt Nam đã trở thành một cái tên đặc biệt. Luôn luôn được nhắc đến bởi nhiều người nước ngoài khi ghé thăm Việt Nam. Bánh xèo cũng được biến tấu nhiều phù hợp với khẩu vị, phong tục của từng địa phương khác nhau. Nhưng đều giữ chung cho món ăn này một hương vị riêng. Để lại cho người thưởng thức nhiều cảm xúc khó quên khi dùng qua dù chỉ là một lần.",
                authorId: "5fa7edd8869c07126058a867",
                createdAt: Date.now(),
                deletedAt: "",
                editedAt: "",
                thumbnails: [
                    {
                        name: "base-image-",
                        img: {
                            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
                            contentType: "image/png"
                        }
                    },
                    {
                        name: "base-image-",
                        img: {
                            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
                            contentType: "image/png"
                        }
                    },
                    {
                        name: "base-image-",
                        img: {
                            data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
                            contentType: "image/png"
                        }
                    }
                ],
                recipe: "2 kg nước",
                comments: [
                    {
                        userId: "5fa7edd8869c07126058a867",
                        comment: "Nhìn có vẻ ngon đấy"
                    },
                    {

                    }
                ],
                likeUserIds: [
                    "5fa7f3aa108cb725f035f21a",
                    "5fa7efe5869c07126058a868"
                ],
                state: "Da dang",
                hashtagIds: "5fa75587997be636b8f92cb3"
            }
        }
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
        const { thumbnails } = this.state.post;
        return (

            <div class="detail-post">
                <div class="left">
                    <div className="big-thumbnail frame">
                        {
                            (thumbnails[0]) ? (<img src={thumbnails[0].img.data} />) : ''
                        }
                    </div>
                    <div className="thumbnails">
                        {
                            thumbnails.map((thumbnail, index) => {
                                if (index > 0 && thumbnail) {
                                    return (<div className="thumbnail" key={index}>
                                        <img src={thumbnail.img.data} />
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <div class="right">
                    <h1>Bánh xèo </h1>
                    <p>Bánh xèo là một món ăn truyền thống thuần túy và rất quen thuộc đối với chúng ta.
                    Tuy nhiên ngày nay, bánh xèo Việt Nam đã trở thành một cái tên đặc biệt.
                    Luôn luôn được nhắc đến bởi nhiều người nước ngoài khi ghé thăm Việt Nam.
                    Bánh xèo cũng được biến tấu nhiều phù hợp với khẩu vị, phong tục của từng địa phương khác nhau.
                    Nhưng đều giữ chung cho món ăn này một hương vị riêng. Để lại cho người thưởng thức nhiều cảm xúc khó quên khi dùng qua dù chỉ là một lần.
                </p>
                    <div class="info">
                        <div class="col-sm-9 post-avatar">
                            <img src="../src/avatar.jpg" alt="" height="60px" width="60px" class="avatar" />
                            <h2>YourName</h2>
                        </div>
                        <div class="col-sm-3">
                            <input class="follow" style={{ width: "100px" }} type="submit" value="Theo dõi" />
                        </div>

                    </div>
                    <div>
                        <i class="far fa-heart"></i> Like  &ensp;
                    <span>10 Lượt like</span>
                    </div> <br />
                    <h3>Nguyên liệu</h3>
                    <div class="content1">
                        <div>
                            <ul>
                                <li> Bột bánh xèo Mikko : 500g</li>
                                <li>Tôm tươi: 150g</li>
                                <li>Thịt ba chỉ heo: 150g</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Nấm hương: 15 cái</li>
                                <li>Giá đỗ: 100g</li>
                                <li>Đỗ sạch đã bóc vỏ: 50g</li>
                            </ul>

                        </div>
                    </div>
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
                        <li>
                            <div class="comment-main-level">
                                <div class="comment-box">
                                    <div class="comment-head">
                                        <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
                                        
                                        <h6 class="comment-name by-author"><a href="http://creaticode.com/blog">Agustin Ortiz</a></h6>
                                        <span>hace 20 minutos</span>
                                        <i class="fa fa-reply"></i>
                                        <i class="fa fa-heart"></i>
                                    </div>
                                    <div class="comment-content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                </div>
                            </div>
                            <ul class="comments-list reply-list">
                                <li>
                                    <div class="comment-box">
                                        <div class="comment-head">
                                            <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" /></div>
                                            <h6 class="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero</a></h6>
                                            <span>hace 10 minutos</span>
                                            <i class="fa fa-reply"></i>
                                            <i class="fa fa-heart"></i>
                                        </div>
                                        <div class="comment-content">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis animi et iure laudantium vitae, praesentium optio, sapiente distinctio illo?
                                    </div>
                                    </div>
                                </li>
                            </ul>
                        </li>


                    </div>
                </div>
            </div>
        );
    }
}

DetailPost.propTypes = {

};

export default DetailPost;