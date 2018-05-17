import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
  render() {
    const productList = this.props.productList;
    const isAdmin = this.props.isAdmin;
    console.log(productList);
    const productComponents = productList.map((product, index) => {
      return <Product
        productName={product.productName}
        description={product.description}
        price={product.price}
        id={product.id}
        key={product.id} 
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