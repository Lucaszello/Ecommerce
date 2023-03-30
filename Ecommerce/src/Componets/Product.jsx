import React, { useEffect, useState } from "react";
import Item from "./Item";

const Product = () => {
  const [products, setProducts] = useState([]);

  const Api = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    setProducts(data);
  };
  useEffect(() => {
    Api();
  }, []);
  return (
    <div className=" mt-8 grid md:gap-7 grid-cols-1 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id} className="">
          <Item product={product} />
        </div>
      ))}
    </div>
  );
};

export default Product;
