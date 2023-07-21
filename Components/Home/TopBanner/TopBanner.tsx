import React from 'react'
import Image from 'next/image'
import dashboard from '../../../public/Images/png/Dashboard image.png'
const TopBanner:React.FC=()=> {
  return (
    <div className=' m-auto px-4 '>
        <p className='max-w-[768px] text-light dark:text-dark font-roboto font-bold sm:text-5xl text-3xl text-center leading-110 m-auto pt-24 '>The Best Software to Grow your Sales and Services</p>
        <p className='max-w-[768px] text-light dark:text-dark  font-roboto text-base font-normal leading-150 m-auto pt-8 pb-12 text-center '>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        <div className='max-w-[576px] h-20 dark:h-12 justify-between items-center w-full flex flex-row  m-auto rounded-3xl bg-white dark:bg-[#2B2E3C] '>
            <input type="text" placeholder='Search' className='max-w-[150px] text-black dark:text-white font-medium outline-none border-none ml-3 bg-white dark:bg-[#2B2E3C] ' />
            <button className="w-44 h-12 rounded-md bg-[#1D2130]  dark:bg-white font-normal text-white dark:text-[#1D2130] text-lg">
          Get Free Trial
          </button>
        </div>
        <Image 
        src={dashboard}
        alt='dashboard' 
        className='m-auto max-w-[1024px] w-full mt-16'
        />
    </div>
  )
}
export default TopBanner