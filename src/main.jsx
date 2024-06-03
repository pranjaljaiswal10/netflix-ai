import React,{Suspense, lazy} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from "./components/Login.jsx"
import Error from './components/Error.jsx';
import HomePageShimmer from './components/HomePageShimmer.jsx';
import MoviePageShimmer from './components/MoviePageShimmer.jsx';

const Browse=lazy(()=>import("./components/Browse.jsx"))
const MoviePage=lazy(()=>import("./components/MoviePage.jsx"))


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
        element:(
        <Suspense fallback={<HomePageShimmer/>}>
         <Browse/>
        </Suspense>)
      },{
        path:"/in/title/:movieId",
        element:(
        <Suspense fallback={<MoviePageShimmer/>}>
        <MoviePage/>
        </Suspense>
        )
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    </React.StrictMode>,
)
