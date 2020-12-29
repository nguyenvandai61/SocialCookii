import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../ListItem/ListItem.css';
class ListItem extends Component {
    render() {
        let listPost = this.props.listOwnPost;
        return (
            <div className="demo-gallery">
                <ul id="lightgallery">
                    {
                        listPost.map(post => {
                            return (

                            <li data-responsive="https://sachinchoolur.github.io/lightGallery/static/img/1-375.jpg 375, https://sachinchoolur.github.io/lightGallery/static/img/1-480.jpg 480, https://sachinchoolur.github.io/lightGallery/static/img/1.jpg 800" data-src="https://sachinchoolur.github.io/lightGallery/static/img/1-1600.jpg"
                                data-sub-html="<h4>Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>" data-pinterest-text="Pin it" data-tweet-text="share on twitter ">
                                <Link to={"/post/"+post._id}>
                                    <img class="img-responsive" src={post.thumbnails[0]} />
                                    <span>{post.title}</span>
                                </Link>
                            </li>

                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default ListItem;