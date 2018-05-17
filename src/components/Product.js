import React, { Component } from 'react';

const Product = ({ id, productName, description, price, deleteProductFromProductList, isAdmin}) => (
  <div>
    <h3>{productName}</h3>
    <div>{description}</div>
    <div>{price}</div>
    { isAdmin ?
      <button onClick={() => deleteProductFromProductList(id)}>Delete</button>
      : null
    }
  </div>
);

export default Product;