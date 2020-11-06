import React from 'react';
import Product from './Product';
import './Products.css';

function Products(props) {

    const listProducts = [
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

    return (
        <div className="products container-fluid">
            <ul className={"list-products order-" + props.order}>
                <li className="title-product">
                    <h1>{props.nameProducts}</h1>
                    <a className="nav-link" href="#1">MORE <i className="fas fa-long-arrow-alt-right"></i></a>
                </li>
                {
                    listProducts.map((product, index) => {
                        return <Product 
                            key={index}
                            name={product.name}
                            price={product.price}
                            imgUrl={product.imgUrl}
                        />
                    })
                }
            </ul>
        </div>
    )
}


export default Products;