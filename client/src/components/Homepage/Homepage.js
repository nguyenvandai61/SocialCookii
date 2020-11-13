import './Homepage.css';
import Header from '../Header/Header'
import Masonry from '../Masonry/Masonry';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Friend from '../Friend/Friend';
import AdditionalBtns from '../AdditonalBtns/AdditionalBtns';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        }
        this.setPage.bind(this);
    }

    setPage = (pageName) => {
        this.setState({page: pageName});
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.page == this.state.page) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    renderContent() {
        switch (this.state.page) {
            case "home": 
                return <Masonry/>;
            case "personalInfo":
                return <PersonalInfo/>;
            case "friend":
                return <Friend/>;
        }
    }
    render() {
        return (
            <div>
                <Header id="header-wrapper" setPage={this.setPage}/>
                {this.renderContent()}
                <AdditionalBtns/>
            </div>
        );
    }
}

Homepage.propTypes = {

};


export default Homepage;
