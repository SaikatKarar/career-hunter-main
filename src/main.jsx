import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Root from './components/Root';
import Blog from './components/Blog/Blog.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: "/applied",
        element: <AppliedJob />
      },
      {
        path: '/job/:id',
        element: <JobDetails />,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/blog",
        element: <Blog />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
