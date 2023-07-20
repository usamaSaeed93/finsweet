import React from 'react'
import ninty from '../../../public/Images/png/ninty.png'
import Image from 'next/image'
const Trial:React.FC=() =>{
  return (
    <div className='max-w-[1200px] w-full lg:h-[344px] flex flex-col gap-y-10 lg:flex-row m-auto justify-between lg:items-center items-start pl-9 mt-32'>
         <div className="max-w-[350px] sm:max-w-[574px]">
        <p className="font-roboto text-3xl font-bold leading-120 text-light dark:text-dark max-w-[500px] pt-6 pb-8">
          To upscale your business to the next level
        </p>
        <p className="font-roboto text-base font-normal leading-6 text-light dark:text-dark max-w-[500px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua invidunt ut labore.
        </p>
        <button className="w-44 h-12 rounded-md bg-[#1D2130] font-normal text-white text-lg mt-6">
          Get Free Trial
          </button>
      </div>
      <Image 
      src={ninty}
      alt='ninty'
      className='m-auto'
      />
    </div>
  )
}
export default Trial;