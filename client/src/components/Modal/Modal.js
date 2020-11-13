import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
class Modal extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {
        var modal = document.getElementById(this.props.modalName);
        // Get the button that opens the modal
        var btn = document.getElementsByClassName(this.props.buttonName)[0];
        // Get the <span> element that closes the modal
        var span = document.getElementById(this.props.buttonName+"-close");
        console.log(span);
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        }
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
            <div id={this.props.modalName} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span id={this.props.buttonName+"-close"} className="close">&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the Modal Body</p>
                        <p>Some other text...</p>
                    </div>
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>

            </div>
        );
    }
}

Modal.propTypes = {

};

export default Modal;