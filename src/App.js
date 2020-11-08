import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import './components/navbar/Navbar.css';
import './components/cart/Cart.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import RouterURL from './components/router/RouterURL';

function App() {

  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <RouterURL />
        <Footer />
      </div>
    </Router>
  );
}

export default App;