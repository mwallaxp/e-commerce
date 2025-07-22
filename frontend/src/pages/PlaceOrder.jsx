import React, { useContext, useState } from 'react'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/Shopcontext'

const PlaceOrder = () => {

  const [method, setMethod]=useState('CND')
  const {navigate} =useContext(ShopContext)

  return (
  <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
    {/*  */}
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
  
      
      <div className='text-xl sm:text-2xl my-3'>
        <h2>DELIVERY INFORMATION</h2>
      </div>
      <div className='flex gap-3'>
        <input type="text" placeholder=' First Name' className='border border-gray-300 rounded py-1.5 w-full' />
        <input type="text" placeholder=' Last Name' className='border border-gray-300 rounde py-1.5 w-full' />
      </div>
       <input type="email" placeholder=' email@gmail.com' className='border border-gray-300 rounded py-1.5 w-full' />
       <input type="text" placeholder=' Street' className='border border-gray-300 rounded py-1.5 w-full' />
        <div className='flex gap-3'>
        <input type="text" placeholder=' City' className='border border-gray-300 rounded py-1.5 w-full' />
        <input type="text" placeholder=' State' className='border border-gray-300 rounded py-1.5 w-full' />
      </div>
      <div className='flex gap-3'>
        <input type="number" placeholder=' Zip code' className='border border-gray-300 rounded py-1.5 w-full' />
        <input type="text" placeholder=' Country' className='border border-gray-300 rounded py-1.5 w-full' />
      </div>
       <input type="number" placeholder=' Phone' className='border border-gray-300 rounded py-1.5 w-full' />
      
      
    </div>
    {/* --------righ side-------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
      <div className='mt-12' >
        <h2>PAYMENT METHOD </h2>
      {/* PAYMENT SECTION */}
        <div className='flex gap-3 flex-col lg:flex-row'>
        <div onClick={()=>setMethod('stripe')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'? 'bg-green-500': ''}`} ></p>
          <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
        </div>
        <div onClick={()=>setMethod('razorpay')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'? 'bg-green-500': ''}`}></p>
          <img src={assets.razorpay_logo} alt="" className='h-5 mx-4' />
        </div>
        <div onclick= {()=>setMethod('CASH ON DELIVERY')} className='flex item-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='CND'? 'bg-green-500': ''}`}></p>
         <p className='text-gray-500 font-medium mx-4'>CASH ON DELIVERY</p>
        </div>

        </div>
    <div className='w-full text-end mt-8'>
      <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>

    </div>
      </div>
      </div>
    </div>
    
  )
}

export default PlaceOrder