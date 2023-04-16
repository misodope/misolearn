import React, { useEffect } from "react";

export const Gallery = () => {
  console.log("Ita feature b");

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
