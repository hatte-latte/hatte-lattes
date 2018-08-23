import React from 'react';

const ProductDisplay = (props) => {
  return (
    <div className="productBox">
      <div><a href="/shop/item"><img src="https://images-na.ssl-images-amazon.com/images/I/41uWV9uIEML._QL70_.jpg" alt="product"></img></a></div>
      <div>Product Name</div>
      <div>Price</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
