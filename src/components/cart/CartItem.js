import React, { useState } from 'react';

function CartItem(props) {

    const [quantity, setQuantity] = useState(props.quantity);

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
                <div className="btn" onClick={ () => setQuantity(quantity - 1) }>-</div>
                <span>{ quantity }</span>
                <div className="btn" onClick={ () => setQuantity(quantity + 1) }>+</div>
            </div>
            <div className="total">{ (props.price) * quantity }</div>
            <div className="delete"><span className="btn"><i className="fas fa-times"></i></span></div>
        </li>
    )
}

export default CartItem;