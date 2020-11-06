import React, { useState } from 'react';
import Product from '../home/products/Product';
import Navbar from '../navbar/Navbar';
import './ListProducts.css';

function ListProducts() {

    const listProducts = [
        {
            id: 0,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            id: 1,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            id: 2,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            id: 3,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            id: 4,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        },
        {
            id: 5,
            imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
            name: 'Cà phê 1',
            price: '10000000'
        }
    ]

    const [indexPage, setIndexPage] = useState(1);

    const index = Math.ceil(listProducts.length/10);
    const tempArr = [];
    for(let i = 1; i <= index; i++) {
        tempArr.push(i);
    }
    function handleClickPage(indexPage) {
        setIndexPage(indexPage);
    }

    return (
        <>
            <Navbar />
            <div className="row">
                <h3>Cà phê rang xay</h3>
                <ul className="list-products">
                    {
                        listProducts.map(item => {
                            return <Product 
                                    key={item.id}
                                    name={item.name}
                                    imgUrl={item.imgUrl}
                                    price={item.price}
                                />
                        })
                    }
                </ul>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {
                            tempArr.map(item => {
                                return <li key={item} className={ indexPage === item ? 'page-item active' : 'page-item'} onClick={ () => handleClickPage(item) } value={item}><div className="page-link page btn">{ item }</div></li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default ListProducts;