import React from 'react';
import './Product.css';
import formatMoney from '../../FormatMoney';

function Product(props) {
    return(
        <li className="product-checkout d-flex align-items-center">
            <p className="img">
                <img src={props.imgUrl} alt=""/>
                <span>{ props.quantity }</span>
            </p>
            <p className="name"> { props.name } </p>
            <p className="price"> { formatMoney(props.price) } ₫</p>
        </li>
    )
}

export default Product;