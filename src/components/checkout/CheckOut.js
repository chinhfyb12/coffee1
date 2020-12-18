import React, { useEffect, useState } from 'react';
import './CheckOut.css';
import Product from './Product';
import formatMoney from '../../FormatMoney';
import { connect } from 'react-redux';

function CheckOut(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(props.productsToCheckout);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [products])

    return (
        <>
            <div className="payment-method">
                <h2>Thông tin giao hàng</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="box-info">
                            <h3>Thông tin người nhận</h3>
                            <form>
                                <input type="text" className="form-control" placeholder="Họ tên người nhận" />
                                <input type="email" className="form-control" placeholder="Email"/>
                                <input type="tel" className="form-control" placeholder="Số điện thoại"/>
                                <input type="text" className="form-control" placeholder="Địa chỉ"/>
                            </form>
                        </div>
                        <div className="box-payment">
                            <h3>Phương thức thanh toán</h3>
                            <form>
                                <input type="radio" name="method-payment" value={0} />
                                <label>Thanh toán khi nhận hàng</label><br/>
                                <input type="radio" name="method-payment" value={1} />
                                <label>Thanh toán chuyển khoản</label>
                            </form>
                        </div>
                        <div className="btn btn-success">Hoàn thành đơn hàng</div>
                    </div>
                    <div className="col-6">
                        <ul className="list-products">
                            {
                                products.map((item, index) => {
                                    return <Product 
                                        key={index}
                                        price={item.price}
                                        keyProduct={item.keyProduct}
                                        name={item.name}
                                        pathName={ item.pathName }
                                        quantity={item.quantity}
                                        imgUrl={item.imgUrl}
                                    />
                                })
                            }
                        </ul>
                        <div className="total">Tổng cộng: 
                            <span>
                                { 
                                    formatMoney(products.reduce((acc, current) => acc + parseInt(current.price) * parseInt(current.quantity), 0))
                                } ₫
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        productsToCheckout: state.productsToCheckout
    }
}

export default connect(mapStateToProps)(CheckOut);
