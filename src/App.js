import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" p-4 font-poppins">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
