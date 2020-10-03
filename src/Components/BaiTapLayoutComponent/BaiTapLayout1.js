import React, { Component } from 'react'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import LaptopList from './LaptopList'
import Product from './Product'
import ProductList from './ProductList'


export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
              <Header/>
              <Carousel/>
              <ProductList/>
              <LaptopList/>
              <Footer/>
             
            </div>
        )
    }
}
