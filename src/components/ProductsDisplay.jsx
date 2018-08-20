import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';

const ProductsDisplay = (props) => {
  // const products = props.productList.map((product, i) => <ProductDisplay name = {product.name} key = {i} />)
  return(
    <div className="productBox">
      <h3>Featured Items</h3>
      <ProductDisplay />
    </div>
  );
};

export default ProductsDisplay;
