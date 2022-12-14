import React from "react";
import { ProductList } from "../components/ProductList";
import Product from "../components/Product";
import "../styles/Products.css";

function Products() {
  return (
    <div className="container">
      <h1 className="title">All products</h1>
      <div className="product-container">
        {ProductList.map((productItem, key) => {
          return (
            <Product
              key={key}
              image={productItem.image}
              name={productItem.name}
              price={productItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
