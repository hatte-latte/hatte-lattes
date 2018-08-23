import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductsContainer from './ProductsContainer.jsx';

const mapStateToProps = store => ({
  
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return(
      <div className="container">
      <ProductsContainer />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
