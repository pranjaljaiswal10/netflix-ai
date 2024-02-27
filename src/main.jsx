import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Login from "./components/Login.jsx"
import Browse from './components/Browse.jsx'
import Error from './components/Error.jsx';


const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Login/>
      },{
        path:"/browse",
        element:<Browse/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
