import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView'

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3,
        },
        {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12,
        }
      ],
      isAdmin: false
    };
  }

  componentDidMount() {
    fetch("/store")
      .then(data => data.json())
      .then(r => console.log(r))
  }

  logInAsAdmin = () => {
    this.setState({isAdmin: !this.state.isAdmin})
  }

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value;
    this.setState({ itemCurrentlyOnSale });
  };

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({ editSaleItem });
  };

  addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({ productList });
  };

  deleteProductFromProductList = (index) => {
    let productList = [...this.state.productList];
    productList.splice(index, 1);
    this.setState({ productList });
  }

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <button onClick={this.logInAsAdmin}>{this.state.isAdmin ? 'Logout' : 'Login as Admin'}</button>
        <div>
          <span>Currently On Sale: {this.state.itemCurrentlyOnSale}!</span>
          <span>
            <button onClick={this.toggleEditSaleItem}>
              {this.state.editSaleItem ? 'Hide' : 'Edit Sale Item'}
            </button>
          </span>

          {
            this.state.editSaleItem ?
              <div>
                <input
                  onChange={this.handleItemCurrentlyOnSaleChange}
                  value={this.state.itemCurrentlyOnSale}
                  type="text" />
              </div>
              : null
          }
          { this.state.isAdmin ? 
          <AdminView productList={this.state.productList}
          isAdmin={this.state.isAdmin} 
          addNewProductToProductList={this.addNewProductToProductList}
          deleteProductFromProductList={this.deleteProductFromProductList}/>
          :
          <ShopView productList={this.state.productList}
          isAdmin={this.state.isAdmin}/>
          }
        </div>
      </div>
    );
  }
}

export default HomePage;