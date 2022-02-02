import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import CreateProduct from '../components/Product/CreateProduct'
export default class ProductCreatePage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <CreateProduct/>
        </Fragment>
    );
  }
}
