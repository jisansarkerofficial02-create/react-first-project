import React from 'react'

const Submit = () => {
  return (
    <section className='submit mt-30'>
        <div className='flex justify-between items-center my-32 mx-25'>
            <h3>Enter your email address for our mailing Promo or other interesting things</h3>
            <div className='flex gap-6'>
                <input className='py-4 pl-6 pr-82 border border-[#D9D9D9] bg-transparent text-[#FFFFFF] rounded-[5px]' type="text" placeholder='Enter your email' />
                <button className='text-white cursor-pointer font-lato font-medium text-[17px] py-3 px-11 border border-[#285A43] rounded-[3px] bg-[#285A43]'>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Submit