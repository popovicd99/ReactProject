import React from "react";

function Product({ image, name, price }) {
  return (
    <div className="product">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default Product;
