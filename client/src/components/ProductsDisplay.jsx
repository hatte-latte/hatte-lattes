import React from 'react';
import ProductDisplay from './ProductDisplay.jsx';

const ProductsDisplay = (props) => {
  return (
    <div className="productBox">
      <h3>Featured Items</h3>
      <ProductDisplay />
      {/* {products} */}
    </div>
    )
};

export default ProductsDisplay;
