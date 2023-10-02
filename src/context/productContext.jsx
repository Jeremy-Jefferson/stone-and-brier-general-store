import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Add the category property to each product
        const productsWithCategory = data.map(product => ({
          ...product,
          category: product.category.toUpperCase()
        }));
        setProducts(productsWithCategory);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
};