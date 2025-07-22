import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)
  return (
    <div className='  pt-16'>
      <div className='text-gray-500 text-2xl'>
        <h1>MY ORDER</h1>
        <div>
          {
            products.slice(1, 4).map((item, index) => (

              <div key={index} className='py-4  text-gray-700 flex flex-col justify-between'>
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20' src={item.image[0]} />
                  {console.log(item)}
                </div>
                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                    <p className='text-lg'>{currency}{item.price}</p>
                    <p>Quantity:1</p>
                    <p>Size:M</p>
                  </div>
                 
                  <div className='md:w1/2  justify-between flex'>
                   <p className='mt-2'>Date:<span className='text-gray-400'>25, July, 2025</span></p>
                   
                    <p className='text-sm md:text-base'> <p className='min-w-2 h-2 rounded-full bg-green-500'></p>Ready to ship</p>
                    <div>
                      <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track order</button>
                    </div>
                  </div>
                </div>

              </div>


            ))
          }
          <p></p>
        </div>

      </div>

    </div>
  )
}

export default Orders