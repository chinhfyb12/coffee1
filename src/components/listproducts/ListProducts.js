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
            dataCoffee: [],
            indexPageArr: [],
            refCategory: null
        }
    }

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

    handleClickPage = index => {
        this.setState({
            indexPage: index
        })
    }
    UNSAFE_componentWillReceiveProps() {
        console.log('te')
        this.setState({
            refCategory: this.props.refCategory
        })
    }
    UNSAFE_componentWillUpdate() {
        dataCoffeeFb.ref('/' + this.state.refCategory).once('value').then(coffee => {
            if(coffee.val()) {
                this.setState({
                    nameCategory: coffee.val().nameCategory
                });
                if(coffee.val().products) {
                    let tempData = [];

                    Object.keys(coffee.val().products).forEach(key => {
                        tempData.push(coffee.val().products[key]);
                    })
                    let index = Math.ceil(tempData.length/10);
                    let tempIndexArr = [];
                    for(let i = 1; i <= index; i++) {
                        tempIndexArr.push(i)
                    }
                    this.setState({
                        dataCoffee: tempData,
                        indexPageArr: tempIndexArr
                    })
                }
            }
        })
    }

    // UNSAFE_componentWillMount() {
    //     console.log(this.props.refCategory)
    //     dataCoffeeFb.ref('/' + this.props.refCategory).once('value').then(coffee => {
    //         if(coffee.val()) {
    //             this.setState({
    //                 nameCategory: coffee.val().nameCategory
    //             });
    //             if(coffee.val().products) {
    //                 let tempData = [];

    //                 Object.keys(coffee.val().products).forEach(key => {
    //                     tempData.push(coffee.val().products[key]);
    //                 })
    //                 let index = Math.ceil(tempData.length/10);
    //                 let tempIndexArr = [];
    //                 for(let i = 1; i <= index; i++) {
    //                     tempIndexArr.push(i)
    //                 }
    //                 this.setState({
    //                     dataCoffee: tempData,
    //                     indexPageArr: tempIndexArr
    //                 })
    //             }
    //         }
    //     })
    // }

    render() {
        console.log(this.props.refCategory)
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
                                this.state.indexPageArr.map(item => {
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