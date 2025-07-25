import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import Title from "./Title"
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, SetLatestProduct]= useState([])
  useEffect(()=>{
    SetLatestProduct(products.slice(0,10));
  }, [])
  return (
    <div className="my-10">
      <div className=" text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          harum nobis quod, explicabo libero aspernatur tempora culpa asperiores
          molestias labore illo. 
        </p>
      </div>
    {/* Rendering Product */}
    <div className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
      {
        latestProducts.map((item, index)=>(
        <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
      ))
      }

    </div>
    </div>
  );
};

export default LatestCollection;
