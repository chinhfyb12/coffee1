import React, { useEffect, useState } from 'react';
import Product from '../home/products/Product';
import './ProductDetail.css';
import formatMoney from '../../FormatMoney';
import { db } from '../../firebase';
import Slug from '../../Slug';
import { Link, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';

function ProductDetail(props) {
    const match = useRouteMatch();
    let pid; //id product
    if(match.params.id === undefined) {
        pid = match.path.slice(match.path.lastIndexOf('.') + 1);
    } else {
        pid = match.params.id
    }

    let pathCategory = match.path.slice(1, match.path.lastIndexOf('/'));
    if(pathCategory.indexOf('/') >= 0) {
        pathCategory = pathCategory.slice(pathCategory.indexOf('/') + 1);
    }

    const [listProducts, setListProducts] = useState([])
    const [product, setProduct] = useState({
        imgUrl: '',
        name: '',
        price: '',
        quantity: 1,
        codeProduct: '',
        guarantee: 0,
        intro: ''
    });

    function handleClickSubtract() {
        if(product.quantity > 1) {
            setProduct({...product, quantity: product.quantity - 1})
        }
    }
    function handleClickAdd() {
        setProduct({...product, quantity: product.quantity + 1})
    }

    useEffect(() => {
        db.collection('cafe')
            .where('codeProduct', '==', pid)
            .onSnapshot(snapshoot => {
                snapshoot.docs.forEach(doc => {
                    setProduct({
                        ...doc.data(),
                        price: doc.data().price.toString(),
                        quantity: 1
                    })
                })
            })
        db.collection('cafe')
        .where('pathCategory', 'array-contains-any', [pathCategory])
        .where('codeProduct', '!=', pid)
        .limit(5)
        .onSnapshot(snapshoot => {
            if(snapshoot) {
                const tempCafes = snapshoot.docs.map(cafe => {
                    return {
                        ...cafe.data(),
                        docKey: cafe.id
                    }
                });
                setListProducts(tempCafes);
                props.changeStatusLoader(false)
            }
        })
    }, [pid])

    return(
        <>
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
                    <p className="price">Giá sản phẩm: <span>{ formatMoney(product.price) } ₫</span></p>
                    <div className="box-quantity">
                        <div className="btn" onClick={ () => handleClickSubtract() }>-</div>
                        <span className="quantity">{ product.quantity }</span>
                        <div className="btn" onClick={ () => handleClickAdd() }>+</div>
                    </div>
                    <p className="total">Tổng tiền: <span>{ formatMoney((product.price) * (product.quantity)) } ₫</span></p>
                    <div className="box-checkout">
                        <div className="btn add-cart">Add to cart</div>
                        <div className="btn buy">Buy now</div>
                    </div>
                </div>
            </div>
            <div className="row same-products">
                <h3>Sản phẩm cùng danh mục</h3>
                <Link to={`/${match.path.slice(1, match.path.lastIndexOf('/'))}`} className="more nav-link">Xem tất cả</Link>
                <ul className="list-products">
                    {
                        listProducts.map(item => {
                            return <Product
                                    pathName={ item.nameCategoryParent === undefined ? Slug(item.nameCategory) : `${Slug(item.nameCategoryParent)}/${Slug(item.nameCategory)}` }
                                    key={ item.docKey }
                                    keyProduct={ item.codeProduct }
                                    name={item.name}
                                    imgUrl={item.imgUrl}
                                    price={item.price}
                                    nameCategory={item.nameCategory}
                                />
                        })
                    }
                </ul>
            </div>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatusLoader: status => dispatch({type: "STATUS_LOADER", status})
    }
}

export default connect(null, mapDispatchToProps)(ProductDetail);