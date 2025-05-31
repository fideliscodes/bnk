'use client';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import Image from 'next/image'
import { useEffect, useRef } from 'react';


const Hero = () => {
  gsap.registerPlugin(SplitText, CustomEase);

  const herotextRef = useRef(null);
  const pRef = useRef(null);
const heroRef= useRef(null)
const tlRef= useRef(null)


  useEffect(() => {
    const sliT = new 
    SplitText(herotextRef.current,{type:'chars'});

    const sliTp = new 
    SplitText(pRef.current,{type:'lines',linesClass:'texts'});

  gsap.set(sliT.chars,{y:100,rotate:15,opacity:0 });
  gsap.set(sliTp.lines,{y:150,opacity:0})
gsap.set(heroRef.current,{scale:0.5});


tlRef.current = gsap.timeline()

tlRef.current
.to(heroRef.current,{scale:1, duration:0.8, ease:'power4.inOut'},'>')
.to(sliT.chars,{y:0,rotate:0,opacity:1, stagger:0.02,duration:0.5, 
  ease:'power4.inOut' },'+=0.02')
  .to(sliTp.lines,{y:0,opacity:1,stagger:0.02,duration:0.5, ease:'power4.inOut'})
  }, [])
  
  return (
   <section ref={heroRef} className=' w-screen max-h-full h-screen bg-white relative overflow-hidden'>
    <div  className='absolute top-1/2 left-1/2 -translate-1/2 w-full px-2 lg:w-[70%] h-fit'>
    <Image className='w-full h-full object-cover' width={200} height={200} src='/images/emergence.png' alt='emergence'/>
    </div>

    <div className='absolute top-5 lg:top-[60%]  h-screen p-5 flex justify-between  w-full'>
        <h1 ref={herotextRef} className='text-4xl lg:text-6xl font-poppins '>
            your <span className='text-green-400'> web3</span> <br /> markerting <br />partner. 
        </h1>

   
    </div>
    <div className='absolute bottom-5 lg:top-5 right-0 p-5'>
        <p ref={pRef} className='text-xl lg:text-xl font-Lora font-light lg:w-[25ch] w-full text-center lg:text-end'>
        helping web3 and crypto projects grow through bold storytelling,porven strategies and 
        community-first campaigns.
        </p>
    </div>



   </section>
  )
}

export default Hero