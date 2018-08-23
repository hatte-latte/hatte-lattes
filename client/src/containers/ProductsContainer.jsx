import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ProductsDisplay from '../components/ProductsDisplay.jsx';

const mapStateToProps = store => ({
  productList: store.products.productList
})

const mapDispatchToProps = dispatch => ({
  getInventory: () => dispatch(actions.getAllInventory())
});

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInventory()
  }

  render() {
    console.log('product list ====> ', this.props.productList)
    return(
      <div className="innerbox">
        <ProductsDisplay productList = {this.props.productList}  />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
