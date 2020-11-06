import React, { useState } from 'react';
import Product from '../home/products/Product';
import Navbar from '../navbar/Navbar';
import './ProductDetail.css';

function ProductDetail() {

    const initProduct = {
        imgUrl: "https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png",
        name: "Cà phê 1",
        price: "10000000",
        quantity: 1,
        codeProduct: 'A550',
        guarantee: 24,
        intro: 'lorem dafsdf;asldfa;shdfklhkashfiuwhfkashdflashdfauy kshgal g asdfhaks dflash as fnakshf as fas'
    }

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
        }
    ]

    const [product, setProduct] = useState(initProduct);
    function handleClickSubtract() {
        if(product.quantity > 1) {
            setProduct({...product, quantity: product.quantity - 1})
        }
    }
    function handleClickAdd() {
        setProduct({...product, quantity: product.quantity + 1})
    }

    return(
        <>
            <Navbar/>
            <div className="row product-detail">
                <div className="col-6 img-product">
                    <p className="img">
                        <img src={ product.imgUrl } alt=""/>
                    </p>
                </div>
                <div className="col-6 content">
                    <h4 className="name-product">{ product.name }</h4>
                    <p className="codeProduct">Mã sản phẩm: <span>{ product.codeProduct }</span></p>
                    <p className="guarantee">Bảo hành: <span>{ product.guarantee } tháng</span></p>
                    <p className="intro"><span>{ product.intro }</span></p>
                    <p className="price">Giá sản phẩm: <span>{ product.price } ₫</span></p>
                    <div className="box-quantity">
                        <div className="btn" onClick={ () => handleClickSubtract() }>-</div>
                        <span className="quantity">{ product.quantity }</span>
                        <div className="btn" onClick={ () => handleClickAdd() }>+</div>
                    </div>
                    <p className="total">Tổng tiền: <span>{ (product.price) * (product.quantity) } ₫</span></p>
                    <div className="box-checkout">
                        <div className="btn add-cart">Add to cart</div>
                        <div className="btn buy">Buy now</div>
                    </div>
                </div>
            </div>
            <div className="row same-products">
                <h3>Sản phẩm cùng danh mục</h3>
                <a href="#1" className="more nav-link">Xem tất cả</a>
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
            </div>
        </>
    )
}

export default ProductDetail;