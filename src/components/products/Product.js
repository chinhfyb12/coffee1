import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
    render() {
        return (
            <li className="product">
                <div className="card">
                    <a className="box-img" href="#1"><img className="card-img-top" src={this.props.imgUrl} alt="anh1" /></a>
                    <div className="card-body">
                        <a href="#1" className="card-title nav-link">{this.props.nameProduct}</a>
                        <p className="price">{this.props.priceProduct} đ</p>
                        <p className="add btn">Add to cart</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Product;