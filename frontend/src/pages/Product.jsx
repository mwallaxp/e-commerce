import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import Relatedproducts from '../component/Relatedproducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm;gap-12 flex-col sm:flex-row'>

        {/* product image */}
        <div className='flex-1 flex flex-col-reverse  gap-3 sm:flex-row'>
          <div className=' flex-1 flex flex-col overflow-auto sm:overflow-scroll justify-between sm:justify-normal sm:w-[18.75] w-full '>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className="w-[-24%] asm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt='' className='w-full h-auto' />

          </div>

        </div>
        <div className="flex-1">
          <h1 className='font-medium ext-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className=' w-3 5' />
            <img src={assets.star_icon} alt="" className=' w-3 5' />
            <img src={assets.star_icon} alt="" className=' w-3 5' />
            <img src={assets.star_icon} alt="" className=' w-3 5' />
            <img src={assets.star_dull_icon} alt="" className=' w-3 5' />
            <p className=' pl-2'>{122}</p>
          </div>
          <p className='m-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='m-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='felx gap-2'>
              {productData.sizes.map((item, index) => (
                <button onClick={() => (setSize(item))} className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
              ))}

            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size )} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700' text='ADD TO CARD'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'/> 
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% original product</p>
          <p>cash on delivery is available this product</p>
          <p>Easy return and exchage policy within 7 days</p>
          
        </div>
        </div>
      </div>
              {/* -----------Description and Review section -----------*/}
              <div className='mt-20'>
                <div className='flex'>
                  <b className='border px-5 py-3 text-sm '>Describtion</b>
                  <p className='border px-5 py-3  text-sm'>Review (122)</p>
                </div>
                <div className=' flex flex-col gap-4 border px-6 text-sm text-gray-500'>
                  <p>An e-commerce website is an online plateform that facilitates the buying and selling website have the gained and pularity due to their convenience, accessibity, and the global reach they offer. it sevr as a vitual martket place where business and individuals can showcase thier product</p>
                  <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus non eligendi odio quod incidunt possimus illo, quae dicta aliquid animi. Nemo illum doloremque ad incidunt minima ex, eos officia sunt!</p>
                </div>
              </div> 
               {/*===============display related product ------------- */}
               <Relatedproducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product