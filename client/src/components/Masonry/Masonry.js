import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Masonry.css';
import {
    Link
} from 'react-router-dom';
import image1 from '../../image/dishes/1.jpg'
import image2 from '../../image/dishes/2.jpg'
import image3 from '../../image/dishes/3.jpg'
import image4 from '../../image/dishes/4.jpg'
import image5 from '../../image/dishes/5.jpg'
import image6 from '../../image/dishes/6.jpg'
class Masonry extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

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
                <div style={{margin: "15px"}}>
                    <h1>Cookii Gallery</h1>
                    <section className="section">
                        <div className="masonry">
                            <Link to="/detailPost">
                                <div className="card card-style brick">
                                    <img src={image1} />
                                    <div className="item__details">
                                        jelly-o brownie sweet
                                    </div>
                                </div>
                            </Link>
                            <div className="card card-style brick">
                                <img src={image2} />
                                <div className="item__details">
                                    jelly-o brownie sweet
                                </div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image3} />
                                <div className="item__details">
                                    jelly-o brownie sweet
                                    </div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image4} />
                                <div className="item__details">
                                    jelly-o brownie sweet</div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image5} />
                                <div className="item__details">
                                    jelly-o brownie sweet</div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image6} />
                                <div className="item__details">
                                    jelly-o brownie sweet
                                </div>                           
                            </div>
                            <div className="card card-style brick">
                                <img src={image4} />
                                <div className="item__details">
                                    jelly-o brownie sweet</div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image5} />
                                <div className="item__details">
                                    jelly-o brownie sweet</div>
                            </div>
                            <div className="card card-style brick">
                                <img src={image6} />
                                <div className="item__details">
                                    jelly-o brownie sweet
                                </div>                           
                            </div>
                        </div>
                    </section>
                </div>
        );
    }
}

Masonry.propTypes = {

};

export default Masonry;