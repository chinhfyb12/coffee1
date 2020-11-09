import React from 'react';
import formatMoney from '../../../FormatMoney';
import './Product.css';

function Product(props) {
    return (
        <li className="product">
            <div className="card">
                <a className="box-img" href="#1"><img className="card-img-top" src={props.imgUrl} alt="anh1" /></a>
                <div className="card-body">
                    <a href="#1" className="card-title nav-link">{props.name}</a>
                    <p className="price">{formatMoney(props.price)} đ</p>
                    <p className="add btn">Add to cart</p>
                </div>
            </div>
        </li>
    )
}

export default Product;