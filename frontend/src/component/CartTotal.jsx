import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount}= useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <h3 className=''>CART  TOTALS</h3>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'> 
            <div className='flex justify-between'>
                <p className='text-2xl'>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p className='text-2xl'>shipping fee</p>
                <p>{currency}{delivery_fee}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency}{getCartAmount()==0 ? 0: getCartAmount() +delivery_fee}.00</b>
            </div>

        </div>

    </div>
  )
}

export default CartTotal