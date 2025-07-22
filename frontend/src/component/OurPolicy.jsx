import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm md:text-base '> 
    <div>
        <img src={assets.exchange_icon} alt="exchage-icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Essay echange policy</p>
        <p className='text-gray-400'>we offer hassel free exchange</p>
    </div>
    <div>
        <img src={assets.quality_icon} alt="exchage-icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 Days free return Policy</p>
    
    </div>
    <div>
        <img src={assets.support_img} alt="exchage-icon" className='w-12 m-auto mb-5' />
        <p className='font-semibold'>Best Cutomer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
    </div>
    </div>
  )
}

export default OurPolicy