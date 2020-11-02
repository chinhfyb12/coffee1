import React from 'react';
import './CheckOut';
import Product from './Product';

function CheckOut() {

    const listProducts = [
        {
          imgUrl:
            "https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png",
          name: "Cà phê 1",
          price: "10000000",
          quantity: 1,
        },
        {
          imgUrl:
            "https://www.lwrfarmersmarket.org/mm5/graphics/00000001/medium%20whole_test.png",
          name: "Cà phê 1",
          price: "10000000",
          quantity: 1,
        },
      ];

    return (
        <div className="payment-method">
            <h2>Thông tin giao hàng</h2>
            <div className="row">
                <div className="col-6">
                    <div className="box-info">
                        <h3>Thông tin người nhận</h3>
                        <form>
                            <input type="text" className="form-control" placeholder="Họ tên người nhận" />
                            <input type="email" className="form-control" placeholder="Email"/>
                            <input type="tel" className="form-control" placeholder="Email"/>
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
                    <div className="btn btn-secondary">Hoàn thành đơn hàng</div>
                </div>
                <div className="col-6">
                    <ul className="list-products">
                        {
                            listProducts.map((item, index) => {
                                return <Product 
                                    key={index}
                                    price={item.price}
                                    name={item.name}
                                    quantity={item.quantity}
                                    imgUrl={item.imgUrl}
                                />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;
