import React, { Component } from 'react';
import './AdditionalBtns.css';
import Modal from '../Modal/Modal'
import PropTypes from 'prop-types';
import AddPost from '../AddPost/AddPost'
import Question from '../Question/Question';

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
        let addModalObj = {
            modalName: "add-modal",
            buttonName: "add-btn",
            modalHeader: "Tạo bài viết",
            componentRender:<AddPost/>
        }
        let questionModalObj = {
            modalName: "question-modal",
            buttonName: "question-btn",
            modalHeader: "Câu hỏi",
            componentRender:<Question/>
        }
        return (
            <div>
                <div class="additional-btns">
                    <button class="add-btn">
                        <a href="/AddPost"></a><i class="fas fa-plus"></i>
                    </button>
                    <button class="question-btn">
                        <i class="fas fa-question"></i>
                    </button>
                </div>
                <Modal modalObj={addModalObj}/>
                <Modal modalObj={questionModalObj}/>
            </div>

        );
    }
}

AdditionalBtns.propTypes = {

};

export default AdditionalBtns;