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
import UserFind from './component/UserFind/UserFind';
import Post from './component/Post/Post';
import PostDetails from './component/PostDetails/PostDetails';
import ErrorPage from './component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path:"/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
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
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
          element: <User></User>
        },
        {
          path:"/user/:userId",
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          element: <UserFind></UserFind>
        },
        {
          path:"/post",
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
          element: <Post></Post>
        },
        {
          path:"/post/:postId",
          loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
          element: <PostDetails></PostDetails>
        }
      ]

    }
    
    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
