import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="box-container">
                    <div className="box-title">
                        <p className="title">Coffee <span>Impacts</span> More Than Just Your Morning.</p>
                        <div className="btn">LEARN MORE</div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;