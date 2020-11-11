import React, { Component } from 'react';
import './AdditionalBtns.css';
import PropTypes from 'prop-types';

class AdditionalBtns extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "https://kit.fontawesome.com/a076d05399.js";
        script.async = true;

        document.body.appendChild(script);
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
            <div>
                <div class="additional-btns">
                    <button class="add-btn">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="add-btn">
                        <i class="fas fa-question"></i>
                    </button>
                </div>
            </div>
        );
    }
}

AdditionalBtns.propTypes = {

};

export default AdditionalBtns;