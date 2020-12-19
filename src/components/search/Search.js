import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Search.css';
import convertString from '../../convertString';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import Slug from '../../Slug';

function Search(props) {

    const [products, setProducts] = useState([]);
    const [keywords, setKeywords] = useState(null);
    const [isSearch, setIsSearch] = useState(false);
    const [result, setResult] = useState(true);

    function searchKeywords(e) {
        setKeywords(convertString(e.target.value))
        setIsSearch(true);
    }
    function renderProductsSearch(products) {
        let list = products.map((product, index) => {
            return (
                <li key={ index } className="nav-item">
                    <Link onClick={ () => hanleClickProduct(`${ product.nameCategoryParent === undefined ? Slug(product.nameCategory) : `${Slug(product.nameCategoryParent)}/${Slug(product.nameCategory)}`}`) } to={ `/${ product.nameCategoryParent === undefined ? Slug(product.nameCategory) : `${Slug(product.nameCategoryParent)}/${Slug(product.nameCategory)}` }/${Slug(product.name)}.${product.codeProduct}` } className="nav-link">{ product.name }</Link>
                </li>
            )
        })
        setProducts(list)
    }
    function hanleClickProduct(path) {
        props.sendPath(path)
        props.changeStatusFormSearch();
    }
    useEffect(() => {
        db.collection('cafe')
            .where('keywords', 'array-contains-any', [keywords])
            .onSnapshot(snapshoot => {
                if(snapshoot) {
                    let cafesTemp = snapshoot.docs.map(doc => {
                        return {
                            ...doc.data()
                        }
                    })
                    if(cafesTemp[0]) {
                        renderProductsSearch(cafesTemp)
                    } else {
                        setResult(false)
                    }
                }
            })
    }, [keywords])

    return (
        <div className="search-cpn">
            <div className="row search-cpn__form justify-content-center align-items-center m-0">
                <form>
                    <div className="form-group d-flex m-0">
                        <div className="form-input">
                            <input onBlur={ () => setIsSearch(true)} onChange={ e => searchKeywords(e) } type="text" className="form-control" name="fSearch" placeholder="Tìm kiếm sản phẩm"/>
                            {
                                isSearch ? (
                                    <ul className="nav justify-content-center list-products-search">
                                        {/* {
                                            products[0] ? renderProductsSearch(products) : <li className="nav-item"><span>Không có kết quả tìm kiếm</span></li>
                                        } */}
                                        {
                                            products
                                        }
                                        {
                                            !result ? <li className="nav-item"><span>Không có kết quả tìm kiếm</span></li> : ''
                                        }
                                    </ul>
                                ) : ''
                            }
                        </div>
                        <div className="btn search-btn">Tìm</div>
                    </div>
                </form>
                <div className="close-btn btn" onClick={ () => props.changeStatusFormSearch() }><i className="fas fa-times"></i></div>
            </div>
            <div className="row search-cpn__span"  onClick={ () => props.changeStatusFormSearch() }></div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        sendPath: path => dispatch({type: "SEND_PATH", path}),
        changeStatusFormSearch: () => dispatch({type: 'STATUS_FORM'})
    }
}

export default connect(null, mapDispatchToProps)(Search);