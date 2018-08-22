import React from 'react';

const CartDisplay = (props) => {
  return (
    <div>
      <span className="cartRow"><img src="https://images-na.ssl-images-amazon.com/images/I/41uWV9uIEML._QL70_.jpg" alt="product"></img></span>
      <span className="cartRow">Product Name</span>
      <span className="cartRow">Price</span>
      <span className="cartRow">Quantity</span>
    </div>
  );
};

export default CartDisplay;
