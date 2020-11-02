import React from 'react';
import './Product.css';

function Product(props) {
    return(
        <li className="product d-flex align-items-center">
            <p className="img">
                <img src={props.imgUrl} alt=""/>
                <span>{ props.quantity }</span>
            </p>
            <p className="name"> { props.name } </p>
            <p className="price"> { props.price } </p>
        </li>
    )
}

export default Product;