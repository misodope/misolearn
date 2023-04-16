import React, { useEffect, useState } from "react";

export const Gallery = () => {
  console.log("Ita feature b");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      {products.map((product, index) => {
        console.log(product);
        return (
          <div>
            <h2>{product.title}</h2>
            <img
              src={product.images[0]}
              alt={`Product Image ${index}`}
              key={index}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        );
      })}
    </div>
  );
};
