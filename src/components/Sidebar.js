import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { FaGear, FaRightFromBracket, FaSquareLetterboxd } from 'react-icons/fa6';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="bg-sidebar text-white w-64 min-h-screen p-4 pl-10">
      <div className="text-2xl font-bold mb-6">LearnLurn
        <div><hr className='flex mt-10 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' /></div>
      </div>
      
      <nav>
        <ul className='text-sidebar-text'>
          <li className="flex items-center mb-4">
            <Link to="/" className="hover:text-yellow mb-2">MENU</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 0 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(0)}>
            <span className="mr-3"><FaSquareLetterboxd className="text-2xl mb-2" /></span>
            <Link to="/" className={`mb-2 ${selectedItem === 0 ? 'text-white' : ''}`}>Home</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 1 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(1)}>
            <span className="mr-3"><FaCalendarAlt className="text-xl mb-2" /></span>
            <Link to="/calendar" className={`mb-2 ${selectedItem === 1 ? 'text-white' : ''}`}>Calendar</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 2 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(2)}>
            <span className="mr-3"><FaBook className="text-xl mb-2" /></span>
            <Link to="/course" className={`mb-2 ${selectedItem === 2 ? 'text-white' : ''}`}>Course</Link>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 3 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(3)}>
            <span className="mr-3"><FaUsers className="text-xl mb-2 rounded-full" /></span>
            <Link to="/leaderboard" className={`mb-2 ${selectedItem === 3 ? 'text-white' : ''}`}>Leaderboard</Link>
          </li>
          <li className="flex items-center mb-4">
            <a href="https://learnlurn.netlify.app/" className="hover:text-yellow mb-2">Profile</a>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 4 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(4)}>
            <span className="mr-3"><FaGear className="text-xl mb-2 rounded-full" /></span>
            <a href="https://learnlurn.netlify.app/" className={`mb-2 ${selectedItem === 4 ? 'text-white' : ''}`}>Settings</a>
          </li>
          <li className={`flex items-center mb-6 pt-3 pl-6 p-1 rounded-xl ${selectedItem === 5 ? 'bg-yellow text-white' : 'hover:bg-gray-200 hover:text-yellow'}`} onClick={() => handleItemClick(5)}>
            <span className="mr-3"><FaRightFromBracket className="text-xl mb-2 rounded-full" /></span>
            <a href="https://learnlurn.netlify.app/" className={`mb-2 ${selectedItem === 5 ? 'text-white' : ''}`}>Logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
