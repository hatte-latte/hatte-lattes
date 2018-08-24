import React from 'react';

const ProductDisplay = (props) => {
  return (

    <div className="productBox">
      <div><a href="/shop/item"><img src={props.photo} alt="product"></img></a></div>
      <div>{props.description}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
