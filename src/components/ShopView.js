import React, { Component } from 'react';
import ProductList from './ProductList';

export default class ShopView extends Component {
  render() {
    return (
      <div>
        <h1>Shop View</h1>
        <h2>Products</h2>
        <ProductList productList={this.props.productList}
        isAdmin={this.props.isAdmin}/>
        <h2>Create a New Product</h2>
      </div>
    )
  }
}
