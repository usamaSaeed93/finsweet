import React from 'react'

const Pricing:React.FC=() =>{
  return (
    <div className='flex flex-col justify-center items-center'>
           <p className="text-center font-roboto text-3xl font-bold leading-120 text-light dark:text-dark pb-12 max-w-[500px] m-auto pt-10">
           Are you ready to grow your business with us?
      </p>
      <p className=' text-light dark:text-dark font-normal font-roboto text-xl m-auto px-5'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
</p>

<button className="w-44 h-12 rounded-md  bg-[#1D2130] dark:bg-[#2B2E3C] font-normal text-white text-lg my-10">
         View Pricing
          </button>
    </div>
  )
}
export default Pricing;