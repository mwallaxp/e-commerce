import React, { useState } from 'react'

const Login = () => {
  const [currentSatate, setCurrentState] = useState('Sign Up')

  return (
    <div>
      <form action="" className='flex flex-col item -center w-[90%] sm:max-w-96 m-auto mt-14 gap text-gray-500'>
        <div className='inline-flex item-center gap-2 mb-2 mt-10'>
          <p className='prata-regular-text-3xl'>{currentSatate}</p>
          <hr className=' boarder-non h-[1.5px] w-6 bg-gray-800' />
        </div>
        {currentSatate === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray ' placeholder='NAME' />}
        <input type="email" className='w-full px-3 py-2 border border-gray ' placeholder='EMAIL' />
        <input type="password" className='w-full px-3 py-2 border border-gray ' placeholder='PASSWORD' />
        <div className='w-full flex justify-between text-ms'>
          <p className='cursor-poiter'>forget your password?</p>
          {
            currentSatate == 'Login' ?
              <p onClick={() => setCurrentState('Sign Up')} className='cursor-poiter'>Create Account</p> :
              <p onClick={() => setCurrentState("Login")} className='cursor-pointer'>Login Here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentSatate=='Login'? "Login": 'Sing Up'}</button>
      </form>
    </div>
  )
}

export default Login