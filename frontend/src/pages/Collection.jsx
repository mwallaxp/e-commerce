import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import ProductItem from "../component/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {
    let productCopy = products.slice();
    
    if (showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productCopy)
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)))
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);
  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-2 ">
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
        </p>
        <img
          src={assets.dropdown_icon}
          alt=""
          className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
        />
        {/* category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Men"} className="w-3" onChange={togglecategory} /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Women"} className="w-" onChange={togglecategory} /> women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Kids"} className="w-3" onChange={togglecategory} /> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter  */}

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"
            } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value={"Topwear"} className="w-3" onChange={toggleSubCategory} />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Bottomwear"} className="w-3" onChange={toggleSubCategory} />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={"Winterwear"} className="w-3" onChange={toggleSubCategory} />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <h1>
            {"ALL"} {"Collections"}
          </h1>
          {/* product sort */}
          <select className=" border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort by: Relavent </option>
            <option value="low-high">Sort by: Low to High </option>
            <option value="high-low"> Sort by: High to Low</option>
          </select>
        </div>
        {/* map  product*/}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products match your filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
