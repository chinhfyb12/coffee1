import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import Slug from '../../../Slug';
import './Products.css';
import { connect } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';
import db from '../../../firebase';

function Products(props) {

    const [listProducts, setListProducts] = useState([]);
    
    useDeepCompareEffect(() => {
        db.collection('cafe')
                .where('pathCategory', 'array-contains-any', [Slug(props.nameProducts)])
                .limit(3)
                .get()
                .then(snapshoot => {
                    if(snapshoot) {
                        const tempCafes = snapshoot.docs.map(cafe => {
                            return {
                                ...cafe.data(),
                                docKey: cafe.id
                            }
                        });
                        let index = Math.ceil(tempCafes.length/10);
                        var tempIndexArr = [];
                        for(let i = 1; i <= index; i++) {
                            tempIndexArr.push(i)
                        }
                        setListProducts(tempCafes);
                    }
                })
    }, [listProducts])

    return (
        <div className="products container-fluid">
            <ul className={"list-products order-" + props.order}>
                <li className="title-product">
                    <h1>{props.nameProducts}</h1>
                    <Link onClick={ () => props.sendCategory(props.nameProducts)} className="nav-link" to={ '/' + Slug(props.nameProducts) }>MORE <i className="fas fa-long-arrow-alt-right"></i></Link>
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

const mapDispatchToProps = dispatch => {
    return {
        sendCategory: category => dispatch({type: "SEND_CATEGORY", category})
    }
}

export default connect(null, mapDispatchToProps)(Products);