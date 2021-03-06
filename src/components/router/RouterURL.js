import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import routes from '../../routes';
import ProductDetail from '../productdetail/ProductDetail';

function RouterURL(props) {
    function showRouterURL(routes) {
        let result = null;
        if(routes) {
            result = routes.map(item => {
                return (
                    <Route key={item.path} path={item.path} exact={item.exact}>
                        { item.main }
                    </Route>
                )
            })
        }
        return result;
    }

    return(
        <Switch>
            { showRouterURL(routes) }
            { showRouterURL(routes[6].routes) }
            <Route path={props.pathProduct === null ? props.initPathname : `/${props.pathProduct}/:slug.:id`} exact={true}>
                <ProductDetail />
            </Route>
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        pathProduct: state.pathProduct,
        initPathname: state.initPathname
    }
}

export default connect(mapStateToProps)(RouterURL);