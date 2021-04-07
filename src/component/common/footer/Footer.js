import React, {Component} from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row footerDiv justify-content-lg-around text-light ">
                    <div
                        className="ml-md-5 ml-lg-2 col-sm-3 col-md-3 col-lg-3 d-flex flex-column justify-content-between">
                        <div className="mb-sm-4 mt-sm-4 mb-md-4 mt-md-4 mt-lg-4">
                            <img src="../../../assets/logo/Ms-Club.jpg" alt="masClub"/>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti magni maiores
                                molestias
                                suscipit tempore? Asperiores aut beatae doloremque, enim fugit, illum itaque mollitia
                                nobis
                                optio quo ratione, repudiandae voluptas voluptates.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3">
                        <div className="mb-sm-4 mt-sm-4 mb-md-4 mt-md-4 mt-lg-4 useFullLinkDiv">
                            <h5>Use Full Links</h5>
                            <span></span>
                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-link">Home</li>
                                    <li className="nav-link">Contact</li>
                                    <li className="nav-link">Blog</li>
                                    <li className="nav-link">Events</li>
                                    <li className="nav-link">Code of Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="mb-sm-4 mt-sm-4 mb-md-4 mt-md-4 mt-lg-4">
                            <h5>Subscribe</h5>
                            <span></span>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid asperiores
                                    dolores
                                    harum laboriosam, maiores nobis quae repudiandae tempora voluptatem? Autem esse
                                    facilis
                                    neque nihil nobis perspiciatis soluta sunt vero!</p>
                            </div>
                            <div className="mb-md-4 mt-md-4 mt-lg-4">
                                <div className="input-group textFieldDiv">
                                    <input type="text" className="form-control emailAddress"
                                           placeholder="Email Address"/>
                                    <span className="input-group-text icon">
                                        <FontAwesomeIcon className="emailIcon" icon={faEnvelope}
                                                         transform={{rotate: -10}}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row copyRightText">
                    <div
                        className="col-sm-12 col-md-12 col-lg-12 text-light d-flex justify-content-lg-start
                        justify-content-sm-center align-items-center">
                        <div className="pt-3 pb-3 copyRightTextDiv">
                            <p className="mb-0">Copyright © 2021 | All Right Reserved MS Club of SLIIT</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
