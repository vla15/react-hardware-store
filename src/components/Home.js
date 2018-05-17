import React, { Component } from 'react';
import AdminView from './AdminView';
import ShopView from './ShopView'

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true,
      productList: [],
      isAdmin: false
    };
  }

  async componentDidMount() {
    try {
      const productList = await fetch("/store").then(result => result.json())
      this.setState({productList})
    } catch (err) {
      console.log('error, couldn\'t load date', err);
    }
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

  addNewProductToProductList = async (newProduct) => {
    try {
        let response = await fetch("/store", {
        method: 'POST',
        body: JSON.stringify(newProduct),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      const productFromDb = await response.json();
      const productList = [...this.state.productList];
      productList.push(productFromDb);
      this.setState({ productList });
    } catch(error) {
      console.log('error', error);
    }
  };

  deleteProductFromProductList = async (id) => {
    await fetch(`/store/${id}`, {
      method: 'DELETE'
    })
    let productList = [...this.state.productList];
    let targetIndex = productList.findIndex(product => product.id === id);
    productList.splice(targetIndex, 1);
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