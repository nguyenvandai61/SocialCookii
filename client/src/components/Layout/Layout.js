import React, { Component } from 'react';
import Header from '../Header/Header';
import AdditionalBtns from '../AdditonalBtns/AdditionalBtns';
import PropTypes from 'prop-types';

class Layout extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                { React.createElement(this.props.children)}
                <AdditionalBtns />
            </div>
        );
    }
}

Layout.propTypes = {

};

export default Layout;