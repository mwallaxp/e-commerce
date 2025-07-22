import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className=''>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
                <div className="">
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, tempore, ea in earum aspernatur neque quas eos iure ullam nemo nobis ad possimus labore itaque sed id necessitatibus dolorem veritatis.</p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privery Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <li>+1-212-456-76809</li>
                    <li>conatct@foreveryou.com</li>
                </div>

            </div>

            <div className=''>
                <hr />
                <p className='py-5 text-sm text-center'>Copy 2024 forever.com</p>

            </div>
        </div>
    )
}

export default Footer