import React from 'react';
import { Link } from 'react-router-dom';
import formatMoney from '../../../FormatMoney';
import './Product.css';
import Slug from '../../../Slug';
import { connect } from 'react-redux';

function Product(props) {

    function handleClick() {
        props.sendPath(`${props.pathName}`);
        props.sendParamsProduct({
            keyProduct: props.keyProduct,
            nameCategory: props.nameCategory,
            name: props.name
        })
    }

    return (
        <li className="product">
            <div className="card">
                <Link onClick={ handleClick } className="box-img" to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`}><img className="card-img-top" src={props.imgUrl} alt="anh1" /></Link>
                <div className="card-body">
                    <Link onClick={ handleClick } to={`/${props.pathName}/${Slug(props.name)}.${props.keyProduct}`} className="card-title nav-link">{props.name}</Link>
                    <p className="price">{formatMoney(props.price)} đ</p>
                    <p className="add btn">Add to cart</p>
                </div>
            </div>
        </li>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendPath: path => dispatch({type: "SEND_PATH", path}),
        sendParamsProduct: paramsProduct => dispatch({type: "SEND_PARAMS", paramsProduct})
    }
}

export default connect(null, mapDispatchToProps)(Product);