import React, { Component } from 'react';
import './Header.css';
import Navbar from '../navbar/Navbar';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div className="box-title">
                    <p className="title">Coffee <span>Impacts</span> More Than Just Your Morning.</p>
                    <div className="btn">LEARN MORE</div>
                </div>
            </>
        )
    }
}

export default Header;