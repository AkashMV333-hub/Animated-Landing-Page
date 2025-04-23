import React from 'react'
import Navbar from './Navbar'

const HeroSection = () => {
  return (
    <div className='w-[calc(100vw - 15px)] h-screen overflow-hidden flex bgHero'>
      <div className='title flex flex-col justify-center items-center w-full gap-6'>
        <Navbar/>
          <div className='title flex flex-col justify-center items-center w-full gap-6'>
          <h1 className='text-white font-extrabold text-9xl' data-aos='fade-up'>GoodFinance</h1>
          <h1 className='text-white font-bold text-3xl' data-aos='fade-left'>Your Creative Gig Journey Starts Here</h1>
          <p className='text-white text-md w-[530px]' data-aos='fade-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium dolores fugiat maxime est quis. Eveniet, veniam doloremque facilis hic eaque possimus corporis debitis aspernatur ab non dolores asperiores dolorum.</p>
          <div className='w-[530px]'>
            <button className='bg-blue-600 text-white text-lg rounded-lg w-[200px] h-[50px]' data-aos='fade-down'>
              Start your journey....
            </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
