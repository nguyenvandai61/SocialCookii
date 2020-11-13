import React, { Component } from 'react';
import './AdditionalBtns.css';
import Modal from '../Modal/Modal'
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
    initClickButtonHandler = (modalName, buttonName) => {
        // Get the modal
        let modal = document.getElementById(modalName);
        // Get the button that opens the modal
        let addBtn = document.getElementsByClassName(buttonName)[0];
        // When the user clicks the button, open the modal 
        addBtn.addEventListener('click', () => {
            modal.style.display = "block";
        })
    }
    componentDidMount() {
        this.initClickButtonHandler("add-modal", "add-btn"); 
        this.initClickButtonHandler("question-modal", "question-btn");   
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
                    <button class="question-btn">
                        <i class="fas fa-question"></i>
                    </button>
                </div>
                <Modal modalName="add-modal" buttonName="add-btn"/>
                <Modal modalName="question-modal" buttonName="question-btn"/>
            </div>

        );
    }
}

AdditionalBtns.propTypes = {

};

export default AdditionalBtns;