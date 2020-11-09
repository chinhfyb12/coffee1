import React from 'react';
import Cart from './components/cart/Cart';
import CheckOut from './components/checkout/CheckOut';
import Home from './components/home/Home';
import ListProducts from './components/listproducts/ListProducts';
import Login from './components/login/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/cart',
        exact: false,
        main: () => <Cart />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <CheckOut />
    },
    {
        path: '/ca-phe-trung-nguyen-cao-cap',
        exact: false,
        main: () => <ListProducts />
    },
    {
        path: '/ca-phe-rang-xay',
        exact: false,
        main: () => <ListProducts />,
        routes: [
            {
                path: '/ca-phe-rang-xay/ca-phe-vien-nen-trung-nguyen',
                exact: false,
                main: () => <ListProducts />
            },
            {
                path: '/ca-phe-rang-xay/rang-xay-pho-thong',
                exact: false,
                main: () => <ListProducts />
            }
        ]
    },
    {
        path: '/ca-phe-con-soc',
        exact: false,
        main: () => <ListProducts />
    },
    {
        path: '/ca-phe-hoa-tan',
        exact: false,
        main: () => <ListProducts />
    }
]

export default routes;