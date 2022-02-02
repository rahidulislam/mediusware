import React, { Component, Fragment } from 'react';
import AllProduct from '../components/Product/AllProduct';
import TopNavigation from '../components/TopNavigation/TopNavigation';

export default class HomePage extends Component {
  render() {
    return (
        <Fragment>
            <TopNavigation/>
            <AllProduct/>
        </Fragment>
    );
  }
}
