import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Masonry.css';
import {
    Link
} from 'react-router-dom';
class Masonry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listPosts: [],
            query: "",
        }
    }

    componentWillMount() {
        
    }

    fetchListAllPosts = () => {
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        fetch('/api/post', {
            method: "GET",
            headers: { 
                'Authorization': 'bearer '+token,
                'Content-Type': 'application/json' 
            },
        })
        .then(res => {
            console.log(res);
            if (res.status == 200) {
              res.json().then(data => {
                  this.setState({listPosts: data})
              })
            } 
            else {
            } 
        })
    }

    fetchListQueryPosts(query){
        let token = localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : "";
        fetch('/api/post?q='+query, {
            method: "GET",
            headers: { 
                'Authorization': 'bearer '+token,
                'Content-Type': 'application/json' 
            },
        })
        .then(res => {
            console.log(res);
            if (res.status == 200) {
              res.json().then(data => {
                  console.log(data);
                  this.setState({listPosts: data})
              })
            } 
            else {
            } 
        })
    }
    componentDidMount() {
        if (window.location.search == "") {
            this.fetchListAllPosts();
        } else
            this.fetchListQueryPosts();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.query == "") {
            this.fetchListAllPosts();
        } else
            this.fetchListQueryPosts(nextProps.query);
    }
    
    
    componentWillUpdate(nextProps, nextState) {
        
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps);

    }

    componentWillUnmount() {

    }

    render() {
        const {listPosts} = this.state;
        return (
                <div style={{margin: "15px"}}>
                    <section className="section">
                        <div className="masonry">
                            {listPosts.map((post, index) => 
                                <Link to={"/post/"+post._id} key = {index}>
                                    <div className="card card-style brick">
                                        <img src={post.thumbnails[0]} />
                                        <div className="item__details">
                                            {post.title}
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </section>
                </div>
        );
    }
}

Masonry.propTypes = {

};

export default Masonry;