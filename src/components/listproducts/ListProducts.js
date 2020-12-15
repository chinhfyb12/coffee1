import React, { useState } from 'react';
import { connect } from 'react-redux';
import Product from '../home/products/Product';
import './ListProducts.css';
import db from '../../firebase';
import useDeepCompareEffect from 'use-deep-compare-effect';
import Slug from '../../Slug';

function ListProducts (props) {
    const [indexPage, setIndexPage] = useState(1);
    const [cafes, setCafes] = useState([]);
    const [indexArr, setIndexArr] = useState([1]);
    // const [nameCategory, setNameCategory] = useState(null);

    function handleClickPage(item) {
        setIndexPage(item);
    }

    useDeepCompareEffect(() => {
        if(props.category) {
            db.collection('cafe')
                .where('pathCategory', 'array-contains-any', [Slug(props.category)])
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
                        // if(tempCafes[0]) {
                        //     setNameCategory(tempCafes[0].nameCategory)
                        //     console.log(true)
                        // }
                        setCafes(tempCafes);
                        setIndexArr(tempIndexArr);
                    }
                })
        }
    }, [cafes])

    return (
        <>
            <div className="row container-products">
            <h3>{ props.category }</h3>
                <ul className="list-products">
                    {
                        cafes.map(item => {
                            return <Product 
                                    key={ item.docKey }
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
                            indexArr.map(item => {
                                return <li key={item} className={ indexPage === item ? 'page-item active' : 'page-item'} onClick={ () => handleClickPage(item) } value={item}><div className="page-link page btn">{ item }</div></li>
                            })
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

const mapStataToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStataToProps)(ListProducts);