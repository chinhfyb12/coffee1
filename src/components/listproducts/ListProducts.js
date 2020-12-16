import React, { useState } from 'react';
import Product from '../home/products/Product';
import './ListProducts.css';
import db from '../../firebase';
import useDeepCompareEffect from 'use-deep-compare-effect';
import Slug from '../../Slug';
import { useRouteMatch } from 'react-router-dom';

function ListProducts () {
    const [indexPage, setIndexPage] = useState(1);
    const [cafes, setCafes] = useState([]);
    const [indexArr, setIndexArr] = useState([1]);
    const [nameCategory, setNameCategory] = useState(null);

    function handleClickPage(item) {
        setIndexPage(item);
    }

    const { path } = useRouteMatch();

    useDeepCompareEffect(() => {
        if(path.slice(path.lastIndexOf('/') + 1)) {
            db.collection('cafe')
                .where('pathCategory', 'array-contains-any', [path.slice(path.lastIndexOf('/') + 1)])
                .orderBy("name")
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
                        if(Slug(tempCafes[0].nameCategory) === path.slice(path.lastIndexOf('/') + 1)) {
                            setNameCategory(tempCafes[0].nameCategory)
                        } else {
                            setNameCategory(tempCafes[0].nameCategoryParent)
                        }
                        setCafes(tempCafes);
                        setIndexArr(tempIndexArr);
                    }
                })
        }
    }, [cafes])

    return (
        <>
            <div className="row container-products">
            <h3>{ nameCategory }</h3>
                <ul className="list-products">
                    {
                        cafes.map(item => {
                            return <Product 
                                    pathName={ item.nameCategoryParent === undefined ? Slug(item.nameCategory) : `${Slug(item.nameCategoryParent)}/${Slug(item.nameCategory)}` }
                                    key={ item.docKey }
                                    keyProduct={ item.codeProduct }
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

export default ListProducts;