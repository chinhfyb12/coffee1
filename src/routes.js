import React from 'react';
import Account from './components/account/Account';
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
        path: '/account',
        exact: false,
        main: () => <Account />
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
        exact: true,
        main: () => <ListProducts />
    },
    {
        path: '/ca-phe-rang-xay',
        exact: true,
        main: () => <ListProducts />,
        routes: [
            {
                path: '/ca-phe-rang-xay/ca-phe-vien-nen-trung-nguyen',
                exact: true,
                main: () => <ListProducts />
            },
            {
                path: '/ca-phe-rang-xay/rang-xay-pho-thong',
                exact: true,
                main: () => <ListProducts />
            }
        ]
    },
    {
        path: '/ca-phe-con-soc',
        exact: true,
        main: () => <ListProducts />
    },
    {
        path: '/ca-phe-hoa-tan',
        exact: true,
        main: () => <ListProducts />
    }
]

export default routes;