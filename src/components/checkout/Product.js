import React from 'react';
import './Product.css';
import formatMoney from '../../FormatMoney';
import { Link } from 'react-router-dom';
import Slug from '../../Slug';
import { connect } from 'react-redux';

function Product(props) {

    function handleClickLink() {
        props.sendPath(`${props.pathName}`);
        props.changeStatusLoader(true);
    }

    return(
        <li className="product-checkout d-flex align-items-center">
            <p className="img">
                <img src={props.imgUrl} alt=""/>
                <span>{ props.quantity }</span>
            </p>
            <Link onClick={ handleClickLink } to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`} className="name"> { props.name } </Link>
            <p className="price"> { formatMoney(props.price * props.quantity) } ₫</p>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendPath: path => dispatch({type: "SEND_PATH", path}),
        changeStatusLoader: status => dispatch({type: "STATUS_LOADER", status}),
    }
}

export default connect(null, mapDispatchToProps)(Product);