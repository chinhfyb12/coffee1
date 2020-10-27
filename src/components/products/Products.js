import React, { Component } from 'react';
import Product from './Product';
import './Products.css';

class Products extends Component {

    listProducts = [
        {
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        }
    ]

    render() {
        return (
            <div className="products container-fluid">
                <ul className={"list-products order-" + this.props.order}>
                    <li className="title-product">
                        <h1>{this.props.nameProducts}</h1>
                        <a className="nav-link" href="#1">MORE <i className="fas fa-long-arrow-alt-right"></i></a>
                    </li>
                    {
                        this.listProducts.map((product, index) => {
                            return <Product 
                                key={index}
                                nameProduct={product.name}
                                priceProduct={product.price}
                                imgUrl={product.imgUrl}
                            />
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default Products;