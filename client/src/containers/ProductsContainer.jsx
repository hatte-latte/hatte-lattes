import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import ProductDisplay from '../components/ProductDisplay.jsx';

// const mapStateToProps = store => ({
//   productList: store.products.productList
// })



class ProductsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInventory()
  }

  render() {
    let arrayofProducts;
    console.log('product list ====> ', this.props.products)
    console.log(this.props.products.productList, "PRODUCT LIST ");
    if (!this.props.products) return null
    else {
      arrayofProducts = this.props.products.productList.map((element, index) => {
      return <ProductDisplay photo={element.photo} description={element.description} key={index} />
      });
    }
    console.log(arrayofProducts, "ARRAYS TO BE RENDERED")

    //  arrayofProducts = this.props.products.map(element => {console.log('x')}
    // //  (     <ProductsDisplay details={element}  />)
    //   );
    
      return(
        <div className="innerbox">
          {arrayofProducts}
        </div>
      )
    
    


  }
}


const mapStateToProps = state => {

  return { products: state.products};
};

console.log(mapStateToProps, "CONTAINEERRRR");

const mapDispatchToProps = dispatch => ({
  getInventory: () => dispatch(actions.getAllInventory())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
