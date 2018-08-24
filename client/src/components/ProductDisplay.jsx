import React from 'react';

const ProductDisplay = (props) => {
  console.log(props, "DETAILS")
  
  return (

    <div className="productBox">
      <div><a href="/shop/item"><img src={props.details} alt="product"></img></a></div>
      <div>Product Name</div>
      <div>Price</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDisplay;
