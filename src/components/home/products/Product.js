import React from 'react';
import { Link } from 'react-router-dom';
import formatMoney from '../../../FormatMoney';
import './Product.css';
import Slug from '../../../Slug';
import { connect } from 'react-redux';

function Product(props) {

    function handleClick() {
        props.sendPath(`${props.pathName}`);
        props.changeStatusLoader(true);
    }
    function handleClickAddToCart() {
        props.sendProduct({
            name: props.name,
            imgUrl: props.imgUrl,
            quantity: 1,
            price: props.price,
            keyProduct: props.keyProduct,
            pathName: props.pathName
        })
    }
    
    return (
        <li className="product">
            <div className="card">
                <Link onClick={ handleClick } className="box-img" to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`}><img className="card-img-top" src={props.imgUrl} alt="anh1" /></Link>
                <div className="card-body">
                    <Link onClick={ handleClick } to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`} className="card-title nav-link">{props.name}</Link>
                    <p className="price">{formatMoney(props.price)} đ</p>
                    <p onClick={ handleClickAddToCart } className="add btn">Add to cart</p>
                </div>
            </div>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendPath: path => dispatch({type: "SEND_PATH", path}),
        changeStatusLoader: status => dispatch({type: "STATUS_LOADER", status}),
        sendProduct: product => dispatch({type: "SEND_LIST_PRODUCT",product})
    }
}

export default connect(null, mapDispatchToProps)(Product);