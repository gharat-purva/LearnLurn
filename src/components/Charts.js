import React from 'react';
import { FaArrowUp, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Charts = () => {
  return (
    <div className='flex h-64'>
      <div className="bg-white rounded-lg p-4 w-2/3 flex mr-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium mb-4">Hours Spent</h2>
          <div className="relative">
            <div 
              className="absolute w-full border-b-2 border-dashed border-yellow ml-4"
              style={{ top: '1rem', height: '0rem' }} // Adjust height to position the line correctly
            ></div>
            <div 
              className="absolute bg-black text-white text-sm font-bold flex items-center justify-center rounded-full"
              style={{ top: '-2rem', left: 'calc(50% + 11.6rem)', width: '3rem', height: '3rem' }} // Adjust positioning of the circle
            >
              32h
            </div>
            <div className="flex justify-between items-center ml-14">
              <div className="h-32 w-full rounded-lg flex items-end">
                <div className="bg-light-green h-28 w-14 rounded-t-full mr-12"></div>
                <div className="bg-light-green h-20 w-14 rounded-t-full mr-12"></div>
                <div className="bg-light-green h-28 w-14 rounded-t-full mr-12"></div>
                <div className="bg-light-green h-36 w-14 rounded-t-full mr-12"></div>
                <div className="bg-light-green h-20 w-14 rounded-t-full mr-12"></div>
                <div className="bg-yellow h-28 w-14 rounded-t-full mr-12"></div>
                <div className="bg-light-green h-16 w-14 rounded-t-full mr-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="items-center bg-white rounded-lg w-72 mr-4">
        <div className='font-bold bg-light-green rounded-lg p-4 w-72 h-40'>
          <h5 className='font-normal text-xs text-sidebar-text w-10 px-20'>Classnia</h5>
          <p className='text-md w-28 ml-20 pb-20'>Amazing way to learn UX/UI Design for mobile</p>
        </div>
        <p className='font-medium pt-2 pl-4 mb-2'>Amazing way to learn UX/UI Design for mobile</p>
        <p className='flex ml-4 text-sidebar-text text-xs'>
          <FaCalendarAlt />&ensp;Dec, 21&emsp;<FaClock />&ensp;09:00 AM
        </p>
      </div>
    
      <div className="items-center bg-white p-4 rounded-lg w-30 pt-20">
        <p className='flex transform rotate-90 text-dark-yellow mb-4 w-full'>View More
          <FaArrowUp className="text-dark-yellow" />
        </p>
      </div>
    </div>
  );
};

export default Charts;
