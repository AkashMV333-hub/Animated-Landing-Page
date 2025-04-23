import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen flex flex-col  gap-10 bg-gray-700 pl-28 pr-28 pt-10 pb-10' data-aos='zoom-out'>
        <div>
            <h1 className='text-xl font-bold mb-3'>Contact Us :</h1>
            <div className='flex flex-col gap-2'>
                <p>Email : <a href="#" className='text-blue-400'>hello@goodfinance.com</a></p>
                <p>Support : <a href="#" className='text-blue-400'>support@goodfinance.com</a></p>
            </div>
        </div>

        <div className=''>
            <h1 className='text-xl font-bold mb-3'>Legal Info :</h1>
            <div className='flex flex-col gap-2'>
                <p>© 2025 GoodFinance. All rights reserved.</p>
                <p>Links to Privacy Policy & Terms</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
