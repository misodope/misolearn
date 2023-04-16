import React, { useEffect } from "react";

export const Gallery = () => {
  useEffect(() => {
    async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      console.log(data);
    };
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
    </div>
  );
};
