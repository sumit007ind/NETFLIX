import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
  

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
