import React, { Component } from 'react';

const Product = ({ productName, description, price, index, deleteProductFromProductList, isAdmin}) => (
  <div>
    <h3>{productName}</h3>
    <div>{description}</div>
    <div>{price}</div>
    { isAdmin ?
      <button onClick={() => deleteProductFromProductList(index)}>Delete</button>
      : null
    }
  </div>
);

export default Product;