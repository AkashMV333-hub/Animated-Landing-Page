import React from 'react'

const Features = () => {
  return (
    <div className='w-[calc(100vw - 15px)] bgcolor flex justify-center items-center'>
        <div className=' grid grid-rows-3 rotate-45 gap-3 p-25'>
            <div className=' w-[900px] flex justify-center items-center'>
                <div className='w-[300px] h-[300px] flex justify-center items-center bg-black rounded-2xl -mr-4' data-aos='slide-right'>
                    <h1 className='w-[180px] text-white font-bold text-3xl -rotate-45 -mr-6 -mt-6'>Track your transactions,<br /> Monthly transactions Chart</h1>
                </div>
            </div>
            <div className='grid grid-cols-3 w-[900px] gap-8'>
                <div className='w-[300px] h-[300px] flex justify-center items-center bg-black rounded-2xl' data-aos='slide-up'>
                <h1 className='w-[180px] text-white font-bold text-3xl -rotate-45 -mr-6 -mt-6'>Category based analysis, <br /> Category based pie-chart</h1>
                </div>
                <div className='w-[300px] h-[300px] flex justify-center items-center bg-white rounded-2xl' data-aos='zoom-in'>
                    <h1 className=' text-black text-5xl font-bold -rotate-45 -mt-6'>Features</h1>
                </div>
                <div className='w-[300px] h-[300px] flex justify-center items-center bg-black rounded-2xl' data-aos='slide-down'>
                <h1 className='w-[180px] text-white font-bold text-3xl -rotate-45 -mr-6 -mt-6'> Get insights of your overspendings and savings </h1>
                </div>
            </div>
            <div className=' w-[900px] flex justify-center items-center'>
                <div className='w-[300px] h-[300px] flex justify-center items-center bg-black rounded-2xl -mr-4' data-aos='slide-left'>
                <h1 className='w-[180px] text-white font-bold text-3xl -rotate-45 -mr-6 -mt-6'> Make your Own budget, <br /> Budget v/s spendings chart</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features
