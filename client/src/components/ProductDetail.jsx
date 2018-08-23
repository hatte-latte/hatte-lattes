import React from 'react';

const ProductDetail = (props) => {
  return (
    <div>
      <h1>Product Name</h1>
      <body>
        Here's a description of the product
      </body>
      <h4>
        Price: $19.99
      </h4>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
