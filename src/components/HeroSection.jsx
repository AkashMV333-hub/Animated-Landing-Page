import React from 'react'

const HeroSection = () => {
  return (
    <div className='w-[calc(100vw - 15px)] h-screen overflow-hidden flex bgHero'>
      <div className='title flex flex-col justify-center items-center w-full gap-6'>
        <h1 className='text-white font-extrabold text-9xl'>GoodFinance</h1>
        <h1 className='text-white font-bold text-3xl'>Your Creative Gig Journey Starts Here</h1>
        <p className='text-white text-md w-[530px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium dolores fugiat maxime est quis. Eveniet, veniam doloremque facilis hic eaque possimus corporis debitis aspernatur ab non dolores asperiores dolorum.</p>
        <div className='w-[530px]'>
          <button className='bg-blue-600 text-white text-lg rounded-lg w-[200px] h-[50px]'>
            Start your journey....
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
