import React, { useState } from 'react';
import nftCard from '../assets/Profile_NFT.png';
import photo2 from '../assets/photo2.jpeg';
import photo3 from '../assets/phot3.jpeg';

const Hero = () => {
  const[hover,setHover] = useState(false);
  
  return (
    <div className='flex flex-col items-center  bg-backgroundColor w-[90%] rounded-xl pt-5 md:pt-20 pb-20 relative z-0'>
       <p className="w-[400px] lg:w-[800px] text-center text-[36px] lg:text-[70px] text-headingColor line leading-[40px] lg:leading-[84px] mb-7 font-bold z-10">We just changed the whole game</p>
       <p className='max-w-[650px]  text-center text-gray-600 text-[23px] lg:text-[28px] line leading-[26px] lg:leading-[46px] z-10'>We are building a social network for professionals that will shake things up, and you wouldn’t want to be left behind</p>
       <div className='flex flex-col md:flex-row mt-8 mb-10 md:mb-32 gap-3 lg:gap-5'>
         <button className='w-[320px] md:w-[250px] bg-headingColor text-[18px] text-white py-3 md:py-4 rounded-full hover:bg-white hover:shadow-xl hover:text-headingColor transition-all duration-100 ease-in-out'>I want to be a part</button>
         <button className='w-[320px] md:w-[250px] text-headingColor text-[18px] py-3 md:py-4 border-2 rounded-full border-headingColor hover:bg-black hover:text-white hover:shadow-xl transition-all duration-100 ease-in-out'>Tell me more</button>
       </div>
       <p className='w-[100%] md:w-[300px] lg:w-[650px] text-[34px] md:text-[50px] text-left text-headingColor font-bold mb-3 z-50'>Watch.Learn.Grow</p>
       
       {/* Desktop View */}
       <div 
         className='hidden md:flex md:flex-row justify-start w-[650px] h-[360px] gap-4'
         onMouseEnter={()=>setHover(true)}
         onMouseLeave={()=>{setHover(false)}}
       >
         {/* Hide on hover part */}
         <div className={`${hover? 'hidden': 'flex'} flex gap-4`}>
          <div className='h-[100%] w-[250px] rounded-lg bg-nftCard bg-center bg-cover'></div>
          <div className="h-[100%] w-[160px] rounded-lg bg-boxOne bg-center bg-cover relative">
            <span className='absolute bottom-6 left-2'>
              <p className='text-gray-400 text-[10px]'>Quarks Wallet</p>
              <p className='text-white text-[14px] -mt-1 mb-4'>160.5 Million</p>
              <p className='text-white text-[16px]'>Blockchain Guru</p>
            </span>
          </div>
         </div>

         {/* Display on hover part */}
         <div className={`${hover? 'flex': 'hidden'}  flex gap-4 `}>
            <div className="h-[100%] w-[160px] rounded-lg bg-boxThree bg-center bg-cover relative">
              <span className='absolute bottom-6 left-2'>
                <p className='text-gray-400 text-[10px]'>Quarks Wallet</p>
                <p className='text-white text-[14px] -mt-1 mb-4'>190.5 Million</p>
                <p className='text-white text-[16px]'>Digital Expert</p>
              </span>
            </div>
            <div className='h-[100%] w-[250px] rounded-lg bg-nftCard bg-center bg-cover'>
            </div>
         </div>
        <div className='h-[100%] w-[160px] rounded-lg bg-boxTwo bg-cover bg-center relative'>
           <span className='absolute bottom-6 left-2'>
                <p className='text-gray-400 text-[10px]'>Quarks Wallet</p>
                <p className='text-white text-[14px] -mt-1 mb-4'>120.5 Million</p>
                <p className='text-white text-[16px]'>Future Ready</p>
            </span>
        </div>
       </div>

       {/* Mobile View */}
       <div className='flex flex-col gap-3 md:hidden z-10'>
        <div className='flex width-[100%] justify-start gap-2'>
          <div className='w-[150px] h-[300px] bg-boxOne bg-cover bg-center rounded-lg relative'>
            <span className='absolute bottom-6 left-2'>
                <p className='text-gray-400 text-[10px]'>Quarks Wallet</p>
                <p className='text-white text-[14px] -mt-1 mb-4'>120.5 Million</p>
                <p className='text-white text-[16px]'>Future Ready</p>
            </span>
          </div>
          <img src ={nftCard} className="h-[300px]"/>
        </div>
        <div className='flex width-[100%] justify-start gap-2'>
          <img src ={nftCard} className="h-[300px]"/>
          <div className='w-[150px] h-[300px] bg-boxTwo bg-cover bg-center rounded-lg relative'>
            <span className='absolute bottom-6 left-2'>
                <p className='text-gray-400 text-[10px]'>Quarks Wallet</p>
                <p className='text-white text-[14px] -mt-1 mb-4'>120.5 Million</p>
                <p className='text-white text-[16px]'>Future Ready</p>
            </span>
          </div>
        </div>
       </div>
       

       
        
       
      {/* bubble elements */}
       <span className='absolute w-10 h-10 rounded-full bg-cyan-200 top-28 right-3 md:top-14 md:left-20 z-1'></span>
       <span className='absolute hidden md:block w-5 h-5 rounded-full bg-purple-300 top-52 right-52 z-1'></span>
       <span className='absolute w-9 h-9 rounded-full bg-yellow-200 top-2 left-4 md:top-[470px] md:left-52 z-1'></span>
       <span className='absolute w-16 h-16 rounded-full bg-green-300 top-[400px] left-3 md:top-[620px] md:left-72 z-1'></span>

       </div>
  );
}

export default Hero;
