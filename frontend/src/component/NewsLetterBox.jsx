import React from 'react'

const NewsLetterBox = () => {
const onSumitHandler=()=>{
    event.preventDefault();
    
}

  return (
    <div className=' text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subcribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam consequatur, deserunt repudiandae sed, ipsum quas animi vel eveniet, reprehenderit eos accusamus! Laborum quam numquam ratione excepturi? Dolores, fugit beatae.</p>
    <form className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl-3'>
        <input type="email" placeholder='Enter your Email' className='w-full sm:flex outline-none' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE </button>
    </form>
    </div>
  )
}

export default NewsLetterBox