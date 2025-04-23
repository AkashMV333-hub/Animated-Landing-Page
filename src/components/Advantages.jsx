import React from 'react'

const Advantages = () => {
  return (
    <div className='w-[calc(100vw - 15px)] flex overflow-hidden bg-white '>
      <div className='w-full p-28' data-aos='flip-left'>
        <h1 className='text-black font-extrabold text-5xl mb-12'>Why Use GoodFinance?</h1>
        <p className='text-black text-lg w-[650px]'>GoodFinance is your go-to personal finance companion — completely free, super user-friendly, and designed to simplify money management for everyone. Whether you're a student, a working professional, or just starting your financial journey, GoodFinance helps you stay on top of your income, expenses, and goals without any stress. With smart insights, a clean and intuitive interface, and powerful tools that work seamlessly across all your devices, it makes financial planning feel effortless. Plus, your privacy and data security are always a top priority.
        </p>
      </div>
      <div className='w-full flex justify-center items-center' data-aos='flip-right'>
        <div className='advantagesImg w-3/5 h-3/5 rounded-xl mr-10'>
        </div>
      </div>
    </div>
  )
}

export default Advantages
