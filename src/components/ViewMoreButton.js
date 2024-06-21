import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const ViewMoreButton = () => {
  return (
    <div className="bg-white p-4 rounded-lg h-60 w-28 ">
    <p className='transform rotate-90 text-dark-yellow'>View More</p>
    <span><FaArrowRight className="mr-4 ml-28 mt-1 text-dark-yellow font-normal" /></span>
  </div>
  )
}

export default ViewMoreButton
