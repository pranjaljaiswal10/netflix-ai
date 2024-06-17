import {Suspense, lazy} from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Error from './components/Error.jsx';
import HomePageShimmer from './components/HomePageShimmer.jsx';
import MoviePageShimmer from './components/MoviePageShimmer.jsx';
import './App.css'


const Browse=lazy(()=>import("./components/Browse.jsx"))
const MoviePage=lazy(()=>import("./components/MoviePage.jsx"))
const Login=lazy(()=>import("./components/Login.jsx"))

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:(
          <Suspense fallback={<div>Data is loading...</div>}>
            <Login/>
          </Suspense>
        )
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


export default function App() {
  return <RouterProvider router={router}/>
}
