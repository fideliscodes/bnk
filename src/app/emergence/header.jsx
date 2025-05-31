'use client';

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";


const Header = () => {
    const menuRef = useRef(null);
    const [isOpen, setisOpen] = useState(false);

    const toggleMenu =()=>{
        setisOpen(!isOpen)
    }
    useEffect(() => {
      gsap.set(menuRef.current,{y:-100});
      setTimeout(() => {
        gsap.to(menuRef.current,{y:0, duration:0.8, ease:'power4.inOut'});
      }, 2200);
    

    }, [])
    
  return (
    <div ref={menuRef} className='flex justify-between px-3 py-2  w-full overflow-hidden z-4'>
<div className='text-xl '>
    <h1 className='space-x-0 font-poppins uppercase'>emergence <span className='text-green-400'> media</span> </h1>
</div>

<div onClick={toggleMenu}  className='flex border-0 rounded-lg bg-gray-200 p-3'>
  <div className={isOpen ? `text-base lg:text-xl text-center mr-2 align-middle text-gray-600 `: `opacity-0 hidden`}> <h2 >close</h2></div>
  <div>
  <div className={ !isOpen ? ` border-0 rounded-lg bg-gray-500 w-6 lg:w-6 h-1 lg:h-2` : `opacity-0`}></div>
<div className={ !isOpen ? ` border-0 rounded-lg bg-gray-500 w-8 lg:w-8 h-1 lg:h-2 mt-3` : `rotate-45 border-0 rounded-lg bg-gray-500 w-8 lg:w-8 h-1 lg:h-2 mt-3`}></div>

  </div>

</div>

</div>
  
  )
}

export default Header