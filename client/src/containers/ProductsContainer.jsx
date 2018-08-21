import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsDisplay from '../components/ProductsDisplay.jsx';
import MarketCreator from '../../../../Challenges/unit-7-react-redux/client/components/MarketCreator';

const mapStateToProps = store => ({
  productList: store.products.productList
})

const mapDispatchToProps = dispatch => ({

});

class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="innerbox">
        <ProductsDisplay productList = {this.props.productList} 
      </div>
    )
  }
}