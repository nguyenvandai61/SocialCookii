import React, { Component } from 'react';
import Header from '../Header/Header';
import AdditionalBtns from '../AdditonalBtns/AdditionalBtns';
import PropTypes from 'prop-types';
import { getIdFromJwtToken} from "../../controller/UserJwtController";

let token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : "";
let headerObject = {
    'Content-Type': 'application/json',
    'Authorization': 'bearer ' + token
}
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            user: {
                avatar: ""
            }
        }
    }
    getQuery = (query) => {
        this.setState({query: query});
    }

    componentDidMount() {
        console.log("willmounts");
        let id = getIdFromJwtToken();
        console.log(id)
        fetch('api/user/userInfo/' + id, {
            method: "GET",
            headers: headerObject,
        })
            .then(res => {
                if (res.status == 200) {
                    res.json().then(data => {
                        this.setState({ user: data })
                        return data;
                    })
                }
            })
    }
    componentDidUpdate() {
       if (this.state.user.avatar == "") {
        let id = getIdFromJwtToken();
        console.log(id)
        fetch('api/user/userInfo/' + id, {
            method: "GET",
            headers: headerObject,
        })
            .then(res => {
                if (res.status == 200) {
                    res.json().then(data => {
                        this.setState({ user: data })
                        return data;
                    })
                }
            })
       }
    }
    render() {
        let props = this.state;
        return (
            <div>
                <Header getQuery={this.getQuery} user={props.user}/>
                { React.createElement(this.props.children, props)}
                <AdditionalBtns />
            </div>
        );
    }
}

Layout.propTypes = {

};

export default Layout;