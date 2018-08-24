import React from 'react';

const ProductDisplay = (props) => {
  return (

    <div className="productBox">
      <div><a href="/shop/item"><img src={props.photo} alt="product"></img></a></div>
      <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p></div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
