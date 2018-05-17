import React, { Component } from 'react';

class ProductForm extends Component {

  constructor() {
    super();
    this.form = React.createRef();
    this.state = {
      newProduct: {}
    }
  }

  handleNewProductChange = (event) => {
    const attributeName = event.target.name;
    const attributeValue = event.target.value;

    const newProduct = { ...this.state.newProduct };
    newProduct[attributeName] = attributeValue;

    this.setState({ newProduct })
  };

  addNewProduct = async (event) => {
    event.preventDefault();
    await this.props.addNewProductToProductList(this.state.newProduct);
    this.clearState()
  }

  clearState = () => {
    [...this.form.current.children].forEach(child => {
      let inputEl = child.querySelector("input");
      this.state.newProduct[inputEl.name] ? inputEl.value = '' : null;
    })
  }

  render() {
    return (
      <div>
        <form ref={this.form} onSubmit={this.addNewProduct}>
          <div><input ref={this.productNameInput} name="productName" type="text" placeholder="Name" onChange={this.handleNewProductChange} /></div>
          <div><input ref={this.descriptionInput} name="description" type="text" placeholder="Description" onChange={this.handleNewProductChange} /></div>
          <div><input ref={this.priceInput} name="price" type="number" min="0.00" step="0.01" placeholder="Price" onChange={this.handleNewProductChange} /></div>
          <div><input type="submit" value="Create New Product" /></div>
        </form>
      </div>
    );
  }
}

export default ProductForm;