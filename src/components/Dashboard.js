import React from 'react';
import Charts from './Charts';
import TodoList from './ToDoList';
import { FaCube, FaRegBell } from 'react-icons/fa6';
import { FaArrowRight, FaChevronDown, FaRegBookmark, FaRegCheckCircle, FaRegStar, FaSearch } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex-1 bg-background">
    <div className="flex justify-between items-center mb-8 bg-white pl-10 pb-2 pt-2 pr-10">
      <div className="flex items-center">
        <FaSearch className="text-lg text-sidebar-text my-2 mr-2" />
        <input className="outline-none border-none" type="text" placeholder="Search Course..." />
      </div>
      <div className="flex items-center">
        <FaRegBell className="text-lg my-2 mr-4" />
        <div className="w-8 h-8 bg-light-green rounded-full mr-4"></div>
        <span className="mr-4 my-2 text-lg font-semibold">Fekete Csanád</span>
        <FaChevronDown className="text-lg my-2 text-sidebar-text" />
      </div>
    </div>

      <div className="grid grid-cols-4 gap-4 pr-8 pl-8 ">
        
        <div className="bg-white p-4 rounded-lg ">
          <div className='grid grid-template-rows-auto min-content'>
            <div className='flex items-center'>
              <FaRegBookmark className="mr-4 p-5 bg-light-red text-black text-7xl font-normal rounded-xl" />
              <h2 className="text-xl text-sidebar-text font-normal ">Total Course</h2>
            </div>
            <p className="text-3xl font-bold ml-20">89</p>
          </div>
          <hr className='flex h-px my-2 bg-sidebar-text border-0 dark:bg-sidebar-text' />
          <div className='flex text-md'><h3 className='text-dark-yellow font-normal'>See Details</h3>
          <span><FaArrowRight className="mr-4 ml-40 mt-1 text-dark-yellow font-normal" /></span>
          </div>
        </div>


        <div className="bg-white p-4 rounded-lg">
          <div className='grid grid-template-rows-auto min-content'>
            <div className='flex items-center'>
              <FaCube className="mr-4 p-5 bg-light-green text-black text-7xl font-normal rounded-xl" />
              <h2 className="text-xl text-sidebar-text font-normal ">Total Workshop</h2>
            </div>
            <p className="text-3xl font-bold ml-20">52</p>
          </div>
          <hr className='flex h-px my-2 bg-sidebar-text border-0 dark:bg-sidebar-text' />
          <div className='flex text-md'><h3 className='text-dark-yellow font-normal'>See Details</h3>
          <span><FaArrowRight className="mr-4 ml-40 mt-1 text-dark-yellow font-normal" /></span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className='grid grid-template-rows-auto min-content'>
            <div className='flex items-center'>
              <FaRegStar className="mr-4 p-5 bg-light-blue text-black text-7xl font-normal rounded-xl" />
              <h2 className="text-xl text-sidebar-text font-normal ">Avg Quiz</h2>
            </div>
            <p className="text-3xl font-bold ml-20">80%</p>
          </div>
          <hr className='flex h-px my-2 bg-sidebar-text border-0 dark:bg-sidebar-text' />
          <div className='flex text-md'><h3 className='text-dark-yellow font-normal'>See Details</h3>
          <span><FaArrowRight className="mr-4 ml-40 mt-1 text-dark-yellow font-normal" /></span>
          </div>
        </div>

        <div className="bg-yellow p-4 rounded-lg">
          <div className='grid grid-template-rows-auto min-content'>
            <div className='flex items-center'>
              <FaRegCheckCircle className="mr-4 p-5 bg-light-yellow text-white text-7xl font-normal rounded-xl" />
              <h2 className="text-xl text-white font-normal ">Certificates</h2>
            </div>
            <p className="text-3xl font-bold ml-20 text-white">56</p>
          </div>
          <hr className='flex h-px my-2 bg-sidebar-text border-0 dark:bg-sidebar-text' />
          <div className='flex text-md'><h3 className='text-white font-normal'>See Details</h3>
          <span><FaArrowRight className="mr-4 ml-40 mt-1 text-white font-normal" /></span>
          </div>
        </div>

      </div>
      <div className='p-8'>
      <Charts /> 
      <TodoList />
      </div>
      
    </div>
  );
}

export default Dashboard;
