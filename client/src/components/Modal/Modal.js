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
        let {modalObj} = this.props
        var modal = document.getElementById(modalObj.modalName);
        // Get the button that opens the modal
        var btn = document.getElementsByClassName(modalObj.buttonName)[0];
        // Get the <span> element that closes the modal
        var span = document.getElementById(modalObj.buttonName+"-close");
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
        let {modalObj} = this.props;
        return (
            <div id={modalObj.modalName} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span id={modalObj.buttonName+"-close"} className="close">&times;</span>
                        {/* <h2>{modalObj.modalHeader}</h2> */}
                    </div>
                    <div className="modal-body">
                        {modalObj.componentRender}
                    </div>
                    {/* <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div> */}
                </div>

            </div>
        );
    }
}

Modal.propTypes = {

};

export default Modal;