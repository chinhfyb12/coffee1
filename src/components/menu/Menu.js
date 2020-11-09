import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
                            <Link  onClick={ () => props.hideMenu() } to="/ca-phe-trung-nguyen-cao-cap" className="nav-link">Cà phê Trung Nguyên cao cấp</Link>
                        </li>
                        <li className="nav-item">
                            <div className="box_link d-flex">
                                <Link  onClick={ () => props.hideMenu() } to="/ca-phe-rang-xay" className="nav-link d-flex">Cà phê rang xay</Link>
                                <span  data-toggle="collapse" href="#nav_2" onClick={ () => setMenu2(!menu2) } className={ `d-flex align-items-center mr-0 ml-auto ${ menu2 ? 'check' : '' }` }><i className="fas fa-angle-right"></i></span>
                            </div>
                            <nav className="navbar__2 collapse" id="nav_2">
                                <ul className="navbar-nav navbar-nav__2">
                                    <li className="nav-item nav-item__2">
                                        <Link  onClick={ () => props.hideMenu() } to="/ca-phe-rang-xay/ca-phe-vien-nen-trung-nguyen" className="nav-link">Cà phê viên nén Trung Nguyên</Link>
                                    </li>
                                    <li className="nav-item nav-item__2">
                                        <Link  onClick={ () => props.hideMenu() } to="/ca-phe-rang-xay/rang-xay-pho-thong" className="nav-link">Rang xay phổ thông</Link>
                                    </li>
                                </ul>
                            </nav>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={ () => props.hideMenu() } to="/ca-phe-con-soc" className="nav-link">Cà phê con sóc</Link>
                        </li>
                        <li className="nav-item">
                            <Link  onClick={ () => props.hideMenu() } to="/ca-phe-hoa-tan" className="nav-link">Cà phê hòa tan</Link>
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