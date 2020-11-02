import React, { useState } from 'react';

function CartItem(props) {

    const [product, setProduct] = useState({
        id: props.id,
        quantity: props.quantity
    });
    function handleClickAdd() {
        setProduct({...product, quantity: product.quantity + 1});
        props.quantityChange({...product, quantity: product.quantity + 1});
    }
    function handleClickSubtract() {
        setProduct({...product, quantity: product.quantity - 1});
        props.quantityChange({...product, quantity: product.quantity - 1});
    }
    function handleGetProduct(id) {
        props.getProductDelete(id)
    }
    
    return (
        <li>
            <div className="name-product">
                <p className="img">
                    <img src={ props.imgUrl } alt=""/>
                </p>
                <p className="name">{ props.name }</p>
            </div>
            <div className="price-product">{ props.price } ₫</div>
            <div className="quantity">
                <div className="btn" onClick={ () => handleClickSubtract() }>-</div>
                <span>{ product.quantity }</span>
                <div className="btn" onClick={ () => handleClickAdd() }>+</div>
            </div>
            <div className="total">{ (props.price) * product.quantity }</div>
            <div className="delete" onClick={ () => handleGetProduct(props.id) }><span className="btn"><i className="fas fa-times"></i></span></div>
        </li>
    )
}

export default CartItem;