import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import formatMoney from '../../FormatMoney';
import Slug from '../../Slug';

function CartItem(props) {

    const [product, setProduct] = useState({
        keyProduct: props.keyProduct,
        quantity: props.quantity
    });
    function handleClickAdd() {
        setProduct({...product, quantity: product.quantity + 1});
        props.quantityChange({...product, quantity: product.quantity + 1});
    }
    function handleClickSubtract() {
        if(product.quantity > 1) {
            setProduct({...product, quantity: product.quantity - 1});
            props.quantityChange({...product, quantity: product.quantity - 1});
        }
    }
    function handleGetProduct(keyProduct) {
        props.getProductDelete(keyProduct)
    }
    function handleClickLink() {
        props.sendPath(`${props.pathName}`);
        props.changeStatusLoader(true);
    }
    
    return (
        <li>
            <div className="name-product">
                <p className="img">
                    <img src={ props.imgUrl } alt=""/>
                </p>
                <Link onClick={ handleClickLink } to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`} className="name">{ props.name }</Link>
            </div>
            <div className="price-product">{ formatMoney(props.price) } ₫</div>
            <div className="quantity">
                <div className="btn" onClick={ () => handleClickSubtract() }>-</div>
                <span>{ product.quantity }</span>
                <div className="btn" onClick={ () => handleClickAdd() }>+</div>
            </div>
            <div className="total">{ formatMoney((props.price) * product.quantity) } ₫</div>
            <div className="delete" onClick={ () => handleGetProduct(props.keyProduct) }><span className="btn"><i className="fas fa-times"></i></span></div>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendPath: path => dispatch({type: "SEND_PATH", path}),
        changeStatusLoader: status => dispatch({type: "STATUS_LOADER", status}),
    }
}

export default connect(null, mapDispatchToProps)(CartItem);