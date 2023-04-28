import React, { useEffect, useState } from 'react';
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/Products')
      .then(response => response.json())
      .then(data => setData(data));
      
  }, []);
  return (
   
    <div className="shop">
      <div className="shopTitle">
        <h4>My Shop</h4>
      </div>

      <div className="products">
        {data.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
