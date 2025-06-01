'use client';

import gsap from "gsap";
import { useEffect, useRef } from "react";

const BnkHero = () => {
  const tlRef = useRef(null);
const movements = [-10, 10, -8]

  useEffect(() => {
    gsap.set('.h1',{y:150 });
   // gsap.set('.tagli',{y:40, opacity:0})
    gsap.set('.counter h1',{y:40})
   tlRef.current = gsap.timeline({delay: 1.75});
   tlRef.current
   .to('.h1',{y:0, stagger:0.1, ease:"power4.inOut", duration:1})
   .to('.counter h1',{y:0, ease:"power4.inOut", duration:1},"+=0.5")
   .to('.counter h1',{y:-60, ease:"power4.inOut", delay:0.5},"-=0.5")
   .to('.counter h1',{y:-100,ease:"power4.inOut",  delay:0.75},"-=0.5")
   .to('.counter h1',{y:-180,ease:"power4.inOut",  delay:0.5},"-=0.5")
   .from('.tagli',{y:40, opacity:0},'+=2')
   .to('.h1',{fontSize:"30vw",  ease:"power4.inOut", duration:1})
   .to('.header-items',{clipPath:'none',duration:0.1},'<')
   .to('.tagli',{y:40, opacity:0},'+=0.1')
   .to('.blockse',{ clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    duration: 0.5,
    stagger:{
      amount:0.5,
      from:'random',
      ease:'power4.inOut'
    }
   },'<')
  movements.forEach((move, index)=>{
    tlRef.current.to(`.h${index + 1}`,{
      yPercent : move,
      xPercent:move,
      duration:0.1,
      ease:'power4.inOut'
    })
  })

  }, [])
  

  return (
<section className='w-screen h-screen overflow-hidden relative '>
  <div className='w-screen h-screen absolute top-0 left-0 overflow-hidden'>
    <div className="absolute inset-0 bg-black/40 "></div>
<video className="w-full h-full object-cover" muted autoPlay loop src="/videos/first.mp4"/>
  </div>
<div className="blocks fixed top-0 left-0 w-full h-screen flex">
  {[...Array(6)].map((_, index) =>(
    <div key={index} className="blockse flex-1 h-full bg-black "></div>
  ))}
</div>
  <div className='header z-10 w-full h-full  flex justify-center items-center '>
    <div className='header-items relative mix-blend-difference mr-5 h1'> 
      <div className=' h1 h1'>
        <h1 className="font-poppins text-yellow-500  relative">B</h1></div>
        </div>
 <div className='header-items relative mix-blend-difference mr-5 h1 '>
   <div className=' h1 h3'>
    <h1 className="font-poppins text-yellow-500  relative">N</h1></div>
    </div>
  <div className='header-items relative mix-blend-difference mr-5  h1'> 
    <div className=' h1 h2'>
      <h1 className="font-poppins text-yellow-500  relative">K</h1></div>
      </div>
  </div>
<div className="counter w-[40px] h-[40px] absolute bottom-[10em] lg:bottom-[6em] left-1/2 -translate-x-1/2 flex justify-center text-red-700 font-poppins ">
  <div className="relative leading-[120%] text-xl">
  <h1 className="mb-10">3</h1>
  <h1 className="mb-6">2</h1>
  <h1>1</h1>
  </div>
</div>
<div className="tagli absolute lg:bottom-[2em] bottom-[6em] left-1/2 -translate-x-1/2 w-[80%] lg:w-[30%] text-center text-yellow-600 text-sm lg:text-lg">
Lorem ipsum,  Voluptates voluptatum nobis, veritatis incidunt</div>
</section>
  )
}

export default BnkHero