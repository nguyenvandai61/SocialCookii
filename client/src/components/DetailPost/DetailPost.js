import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DetailPost.css';
class DetailPost extends Component {
    constructor(props) {
        super(props);

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
        return (
            <div  class="content">
            <div class="left">
                <img src="../src/avatar.jpg" alt="" height="" width="" />

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
                    <div class="col-sm-9">
                        <img src="../src/avatar.jpg" alt="" height="60px" width="60px" class="avatar"/>
                        <h2>YourName</h2>
                    </div>
                    <div class="col-sm-3">
                        <input type="submit" value="Theo dõi" />
                    </div>
                    
                </div>
                <div>
                    <i class="far fa-heart"></i> Like  &ensp;
                    <span>10 Lượt like</span>
                </div> <br/>
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
                            <img src="../src/avatar.jpg" alt="" height="60px" width="60px" class="avatar" />
                            <input type="text" placeholder="Thêm nhận xét" /> <br/>
                        </div> <br/>
                        <div class="submit" align="center" >
                            <input type="button" value="Hủy" />
                            <input type="submit" value="OK"/>
                        </div>
                        
                    </form>
                </div>
                <div>
                    <div class="cmt">
                        <img src="../src/avatar.jpg" alt="" height="60px" width="60px" class="avatar" />
                        <div class="ct">
                            <h5>YourName</h5>
                            <p>Bài viết hay</p>
                        </div>
                    </div> <br/>
                    
                </div>
            </div>
        </div>
        );
    }
}

DetailPost.propTypes = {

};

export default DetailPost;