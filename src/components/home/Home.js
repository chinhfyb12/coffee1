import React, { useEffect } from 'react';
import Header from '../header/Header';
import SaveMoney from '../saveMoney/SaveMoney';
import Products from './products/Products';

function Home() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    const listNameProducts = ['Cà phê Trung Nguyên cao cấp', 'Cà phê hòa tan']

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