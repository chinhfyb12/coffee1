import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Menu.css';

function Menu(props) {

    const [menu2, setMenu2] = useState(false);

    return (
        <div className="box-menu d-flex">
            <div className={`box ${ props.menuReducer.showMenu ? 'show' : '' }`}>
                <nav className="navbar d-flex align-items-start justify-content-start">
                    <div className="close-btn btn" onClick={ () => props.hideMenu() }><i className="fas fa-times"></i></div>
                    <h1>MENU</h1>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#1" className="nav-link">Cà phê Trung Nguyên cao cấp</a>
                        </li>
                        <li className="nav-item"  data-toggle="collapse" href="#nav_2" onClick={ () => setMenu2(!menu2) }>
                            <a href="#1" className="nav-link d-flex">Cà phê rang xay  <span className={ `d-flex align-items-center mr-0 ml-auto ${ menu2 ? 'check' : '' }` }><i className="fas fa-angle-right"></i></span></a>
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
            </div>
            { props.menuReducer.showMenu ? (<div className="menu-cpn__span" onClick={ () => props.hideMenu() }></div>) : '' }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        menuReducer: state.menuReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        hideMenu: () => dispatch({type: "CHANGE_STATUS_MENU"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);