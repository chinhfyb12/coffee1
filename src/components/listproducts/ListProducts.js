import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../home/products/Product';
import './ListProducts.css';
import dataCoffeeFb from '../../firebase';

class ListProducts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indexPage: 1,
            nameCategory: '',
            dataCoffee: []
        }
    }

    tempArr = [1, 2];

    renderProducts = (listProducts) => {
        if(listProducts) {
            listProducts.map(item => {
                return <Product 
                        key={ item }
                        name={item.name}
                        imgUrl={item.imgUrl}
                        price={item.price}
                    />
            });
        }
    }
    // useComponentWillMount(() => {
    //     if( dataCategory ) {
    //         setCategory(dataCategory.nameCategory);
    //     }
    // })

    // listProducts = [
    //     {
    //         id: 0,
    //         imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
    //         name: 'Cà phê 1',
    //         price: '10000000'
    //     },
    //     {
    //         id: 1,
    //         imgUrl: 'https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png',
    //         name: 'Cà phê 2',
    //         price: '10000000'
    //     }
    // ]

    handleClickPage = index => {
        this.setState({
            indexPage: index
        })
    }

    UNSAFE_componentWillMount() {
        dataCoffeeFb.ref('/' + this.props.refCategory).once('value').then(coffee => {
            if(coffee.val()) {
                this.setState({
                    nameCategory: coffee.val().nameCategory
                });
                if(coffee.val().products) {
                    let tempData = [];

                    Object.keys(coffee.val().products).forEach(key => {
                        tempData.push(coffee.val().products[key]);
                    })
                    this.setState({
                        dataCoffee: tempData
                    })
                }
            }
        })
    }

    render() {
        return (
            <>
                <div className="row container-products">
                <h3>{ this.state.nameCategory }</h3>
                    <ul className="list-products">
                        {
                            this.state.dataCoffee.map(item => {
                                return <Product 
                                        key={ JSON.stringify(item) }
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
                                this.tempArr.map(item => {
                                    return <li key={item} className={ this.state.indexPage === item ? 'page-item active' : 'page-item'} onClick={ () => this.handleClickPage(item) } value={item}><div className="page-link page btn">{ item }</div></li>
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}

const mapStataToProps = state => {
    return {
        refCategory: state.refCategory
    }
}

export default connect(mapStataToProps)(ListProducts);