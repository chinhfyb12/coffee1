import React from 'react';
import './Footer.css';
import logo from './thrive_footer_logo_200x114.png'

function Footer() {

    return (
        <div className="footer">
            <div className="row justify-content-center">
                <div className="col-3 d-flex flex-decoration-column justify-content-center align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item mb-2"><i className="fas fa-phone"></i> 09859729834523</li>
                        <li className="nav-item"><i className="fas fa-envelope"></i> coffeeshop@support.com</li>
                    </ul>
                </div>
                <div className="col-3">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;