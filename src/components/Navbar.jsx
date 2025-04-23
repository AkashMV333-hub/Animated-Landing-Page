import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between fixed overflow-hidden items-center w-[calc(100vw-15px)] h-[50px]  text-white top-0 pl-20 pr-20 pt-10 pb-10 hover:bg-black hover:transition duration-300 hover:scale-105 hover:shadow-2xl hover:transition-y-1'>
      <div className='text-3xl font-bold'>
        GoodFinance
      </div>
      <div className='flex gap-10'>
        <p>Home</p>
        <p>Sign up</p>
      </div>
    </div>
  )
}

export default Navbar
