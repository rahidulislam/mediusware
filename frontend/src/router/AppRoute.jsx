import React, { Component, Fragment } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ProductCreatePage from '../pages/ProductCreatePage';
export default class AppRoute extends Component {
  render() {
    return (
    <Fragment>
        <Routes>
            <Route end path="/" element={<HomePage/>} />
            <Route end path="/product/create" element={<ProductCreatePage/>}/>
        </Routes>
    </Fragment>
    );
  }
}
