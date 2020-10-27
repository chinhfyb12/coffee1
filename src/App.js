import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Products from './components/products/Products';
import SaveMoney from './components/saveMoney/SaveMoney';

function App() {
  const listNameProducts = ['cà phê trung nguyên cao cấp', 'cà phê rang xay']
  return (
    <div className="container-fluid">
      <header>
        <Header />
      </header>
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
      <Footer />
    </div>
  );
}

export default App;
