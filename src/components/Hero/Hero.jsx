import React from 'react';
import HeroImg from "../../assets/1.png"

const Hero = () => {
  return (
    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
        {/* text section */}
        <div className='flex flex-col justify-center items-center gap-5 text-center md:text-left pt-24 pb-10'>
            <h1 className='text-3xl font-semibold'>Delicious Food Is Waiting For You</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Dolorum libero laboriosam
               porro in facilis magnam explicabo est, ea
               ab obcaecati!
            </p>
            <div className='flex gap-4 items-center md:justify-start justify-center'>
                <button className='primary-btn'>Food Menu</button>
                <button className='secondary-btn'>Book Table</button>
            </div>
        </div>
        {/* image section */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImg} alt="" className='img-shadow' />
        </div>
    </div>
  )
}

export default Hero