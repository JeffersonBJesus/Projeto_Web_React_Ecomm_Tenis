import { Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./pages/header/header";
import Main from "./pages/main/main";
import Category from "./pages/category/category";
import Footer from "./pages/footer/footer";
import NotFound from "./pages/404/404.js"
import Checkout from "./pages/checkout/checkout.js"
import Marca from "./pages/marca/marca.js"
import { Component } from "react";
import Contexts from './context/index'
import About from './pages/aboutUs/about.js'
import Produto from "./pages/produto/produto.js";

class App extends Component {
  render() {
    return (
      <Contexts>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categoria/:buscar" element={<Category />} />
          <Route path="/marca/:buscar" element={<Marca />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="/check" element={<Checkout />} />
          <Route path="/sobrenos" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </Contexts>

    );
  }

}

export default App;
