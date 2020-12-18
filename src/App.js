import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import './components/navbar/Navbar.css';
import './components/cart/Cart.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router} from "react-router-dom";
import RouterURL from './components/router/RouterURL';
import { connect } from 'react-redux';
import { auth, db } from './firebase';

function App(props) {

  const initPathname = window.location.pathname;
  if(initPathname) {
    props.sendInitPathname(initPathname);
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
        if(user) {
          db.collection('users')
            .doc(user.uid)
            .onSnapshot(snapshot => {
              props.updateProduct(snapshot.data().cart)
            })
        }
    })
  }, [])

  return (
    <Router>
      { props.statusLoader ? <p><span></span></p> : ''}
      <div className="container-fluid">
        <Navbar />
        <RouterURL />
        <Footer />
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    sendInitPathname: initPathname => dispatch({type: "SEND_INIT_PATHNAME", initPathname}),
    updateProduct: productUpdate => dispatch({type: "UPDATE_LIST_PRODUCT", productUpdate})
  }
}
const mapStateToProps = state => {
  return {
      statusLoader: state.statusLoader
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);