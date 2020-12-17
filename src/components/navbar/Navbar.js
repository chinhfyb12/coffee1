import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Menu from '../menu/Menu';
import Search from '../search/Search';
import './Navbar.css';
import { auth } from '../../firebase';
function Navbar(props) {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setIsLogin(true)
            }
            if(user === null) {
                setIsLogin(false)
            }
        })
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-md nav-header">
                { props.statusSearchForm ? <Search /> : '' }
                <Menu />
                <ul className="navbar-nav">
                    <div className="box1">
                        <li className="nav-item__icon" onClick={ () => props.hideMenu() }>
                            <i className="fas fa-bars"></i>
                        </li>
                        <li className="nav-item__icon" onClick={ () => props.changeStatusSearchForm() }>
                            <i className="fas fa-search"></i>
                        </li>
                    </div>
                    <div className="logo">
                        <Link exact="true" to="/"><img src="/lwr_logo.png" alt="Logo"/></Link>
                    </div>
                    <div className="box2">
                        <Link to={ isLogin ? '/account' : '/login' } className="nav-item__icon">
                            <i className="far fa-user-circle"></i>
                        </Link>
                        <Link to="/cart" className="nav-item__icon">
                            <i className="fas fa-shopping-bag"></i>
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}

const mapStateToProps = state => {
    return {
        statusSearchForm: state.statusSearchForm
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeStatusSearchForm: () => dispatch({type: 'STATUS_FORM'}),
        hideMenu: () => dispatch({type: "CHANGE_STATUS_MENU"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);