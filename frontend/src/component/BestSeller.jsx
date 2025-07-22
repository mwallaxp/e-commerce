import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestseller));
    setBestSeller(bestProduct.slice(0,5));
  }, []);
  return (
    <div className="my-10 bg-green-200">
      <div className="text-center text-3xl py-8">
        <h1>BEST SELLER</h1>
        <p className="w-3/4 m-auto text text-xs sm:text-sm-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {
            bestSeller.map((item, index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
            ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
