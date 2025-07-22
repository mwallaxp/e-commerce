import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link} from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "../context/Shopcontext";  

const NavBar = () => {
  const [visible, setVisible] = useState(false)

  const {setShowSearch, getCartCount}=useContext(ShopContext)
  return (

    <div className="flex items-center justify-between align-middle p-5 font-medium">
      <Link to='/'><img src={assets.logo} alt="" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to='/' className="flex flex-col items-center gap-2">
          <p>HOME</p>
        </NavLink>
        <NavLink to='/collection' className="flex flex-col items-center gap-2">
          <p>COLLECTION</p>
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-2">
          <p>ABOUT</p>
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-2">
          <p>CONTACT</p>
        </NavLink>
      </ul>

      <div className="flex items-center gap-6"> 
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="search" className="w-5 cursor-pointer" />
      
       <Link to='/login'> <div className="group relative flex">
 <img src={assets.profile_icon} alt="view profile"  className="w-5 cursor-pointer "/>
    <div className="group-hover:block absolute hidden dropdown-menu right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700">
        <p className="cursor-pointer hover:text-black">My Profile</p>
        <p className="cursor-pointer hover:text-black">Orders</p>
        <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
    </div>
    </div></Link>
    <Link to='/cart'  className='relative'>
    <img src={assets.cart_icon} alt="cart"  className="w-5 min-w-5"/>
    <p className="absolute right-[-5px]  bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">{getCartCount()}</p>
    </Link>
    <img onClick={()=>setVisible(true)} src={assets.menu_icon} alt="" className=" w-s cursor-pointer sm:hidden "/>
      </div>
      {/* sidebar menu sma;; scress*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'} `}>
        <div className="flex flex-col text-gray-600"> 
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer"></div>
          <img src={assets.dropdown_icon} alt="drop-down"  className="h-4 rotate-180"/>
          <p>Back</p>
        </div>
        <NavLink onClick={()=>setVisible(false)} className="p-2 pl-6 border" to='/'>Home</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="p-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="p-2 pl-6 border" to='/about'>ABOUT</NavLink>
        <NavLink onClick={()=>setVisible(false)} className="p-2 pl-6 border" to='/contact'>CONTACT</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
