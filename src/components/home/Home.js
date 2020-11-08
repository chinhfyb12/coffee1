import React from 'react';
import Header from '../header/Header';
import SaveMoney from '../saveMoney/SaveMoney';
import Products from './products/Products';

function Home() {

    const listNameProducts = ['cà phê trung nguyên cao cấp', 'cà phê rang xay']

    return(
        <>
            <Header />
            <section>
                {
                listNameProducts.map((name, index) => {
                    return <Products 
                    key={index}
                    order={index + 1}
                    nameProducts={name}
                    />
                })
                }
                <SaveMoney />
            </section>
        </>
    )
}

export default Home;