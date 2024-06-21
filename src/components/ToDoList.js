import React from 'react';
import { FaPen } from 'react-icons/fa';

const TodoList = () => {
  const leaders = [
    { rank: 1, name: 'Harold Jacob', course: 129, points: 11232 },
    { rank: 2, name: 'Brandie Ronald', course: 108, points: 8442 },
    { rank: 3, name: 'Irma Sennyia', course: 98, points: 7864 },
  ]
  return (
    <div className='flex'>
    <div className="bg-white rounded-lg mt-4 p-4 w-1/3 mr-4">
    <div className='flex justify-between items-center'>
    <h2 className="text-2xl font-medium mb-0">To Do List</h2>
    <div className='flex items-center'>
    <p className='text-sidebar-text'>Edit <FaPen className='ml-2' /></p>
    </div>
    </div>
      <ul>
        
        <li className="mb-2"><input type="checkbox" className="mr-2 bg-yellow border-dark-yellow text-yellow focus:ring-dark-yellow" /> Join UI Design Class with my friend</li>
        <span className='text-sidebar-text ml-6'>Sun, 09:00 AM</span>
        <li className="mb-2"><input type="checkbox" className="mr-2 bg-yellow border-dark-yellow text-yellow focus:ring-dark-yellow" /> do the assignment given by coach Dery</li>
        <span className='text-sidebar-text ml-6'>Sun, 08:00 AM</span>
        <li className="mb-2"><input type="checkbox" className="mr-2 bg-yellow border-dark-yellow text-yellow focus:ring-dark-yellow" /> Upgrade to premium</li>
        <span className='text-sidebar-text ml-6'>Sun, 07:00 AM</span>
      </ul>
    </div>

<div className="bg-white rounded-lg mt-4 p-4 w-2/3 ">
<h2 className="text-2xl font-medium mb-4">Leaderboard</h2>

<table className="table-auto w-full border-collapse">
        <thead className='border-b text-sidebar-text '>
          <tr className=" text-left">
            <th className="px-3 py-2 font-normal">NO</th>
            <th></th>
            <th className="px-3 py-2 font-normal">ITEM</th>
            <th className="px-3 py-2 font-normal">COURSE</th>
            <th className="px-3 py-2 font-normal">POINTS</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader) => (
            <tr key={leader.rank} >
              <td className="px-3 py-3">{leader.rank}</td>
              <td className="w-14 h-14 bg-light-green rounded-full mt-2"></td>
              <td className="px-3 py-3">{leader.name}</td>
              <td className="px-3 py-3">{leader.course}</td>
              <td className="px-3 py-3">{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>

</div>

</div>
  );
}

export default TodoList;
