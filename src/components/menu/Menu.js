import React from 'react';
import './Menu.css';

function Menu () {

    const check = '';

    return (
        <div className="box-menu d-flex">
            <nav className="navbar d-flex align-items-start">
                <div className="close-btn btn"><i className="fas fa-times"></i></div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#1" className="nav-link">Cà phê Trung Nguyên cao cấp</a>
                    </li>
                    <li className="nav-item"  data-toggle="collapse" href="#nav_2">
                        <a href="#1" className="nav-link d-flex">Cà phê rang xay  <span className={ "d-flex align-items-center mr-0 ml-auto" + check }><i className="fas fa-angle-right"></i></span></a>
                        <nav className="navbar__2 collapse" id="nav_2">
                            <ul className="navbar-nav navbar-nav__2">
                                <li className="nav-item nav-item__2">
                                    <a href="#1" className="nav-link">Cà phê viên nén Trung Nguyên</a>
                                </li>
                                <li className="nav-item nav-item__2">
                                    <a href="#1" className="nav-link">Rang xay phổ thông</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className="nav-item">
                        <a href="#1" className="nav-link">Cà phê con sóc</a>
                    </li>
                    <li className="nav-item">
                        <a href="#1" className="nav-link">Cà phê hòa tan</a>
                    </li>
                </ul>
            </nav>
            <div className="menu-cpn__span"></div>
        </div>
    )
}

export default Menu;