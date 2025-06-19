import { Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./pages/header/header";
import Main from "./pages/main/main";
import Category from "./pages/category/category";
import Footer from "./pages/footer/footer";
import NotFound from "./pages/404/404.js"
import Checkout from "./pages/checkout/checkout.js"
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/categoria" element={<Category />} />
          <Route path="/check" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer></Footer>
      </>

    );
  }

}

export default App;
