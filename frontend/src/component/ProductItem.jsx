import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {
  
    const {currency} = useContext(ShopContext)
  return (
    <Link to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img src={image[0]} alt="" className='hover:scale-110 transition ease-out'/>

        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem