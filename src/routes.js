import ListProducts from './components/listproducts/ListProducts';

const routes = [
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
                path: '/ca-phe-vien-nen-trung-nguyen',
                exact: false,
                main: () => <ListProducts />
            },
            {
                path: '/rang-xay-pho-thong',
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