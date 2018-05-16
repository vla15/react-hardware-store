import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
  render() {
    const productList = this.props.productList;
    const isAdmin = this.props.isAdmin;

    const productComponents = productList.map((product, index) => {
      return <Product
        productName={product.productName}
        description={product.description}
        price={product.price}
        key={index} 
        index={index}
        isAdmin={isAdmin}
        deleteProductFromProductList={this.props.deleteProductFromProductList}/>;
    });

    return (
      <div>
        {productComponents}
      </div>
    );

  }
}

export default ProductList;