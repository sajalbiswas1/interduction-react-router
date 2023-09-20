import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import User from './component/User/User';

const router = createBrowserRouter([
    {
      path:"/",
      element: <Home></Home>,
      children: [
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path:"/user",
          element: <User></User>
        }
      ]

    }
    
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
