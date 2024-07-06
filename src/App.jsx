import {Suspense, lazy} from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Error from './components/Error.jsx';
import HomePageShimmer from './components/HomePageShimmer.jsx';
import './App.css'
import MoviePageShimmer from './components/MoviePageShimmer.jsx';
import Browse from "./components/Browse.jsx"
import Login from "./components/Login.jsx"
import MoviePage from "./components/MoviePage.jsx"


// const Browse=lazy(()=>import("./components/Browse.jsx"))
// const MoviePage=lazy(()=>import("./components/MoviePage.jsx"))
// const Login=lazy(()=>import("./components/Login.jsx"))

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:(
          <Login/>
          // <Suspense fallback={<div>Data is loading...</div>}>
          // </Suspense>
        )
      },{
        path:"/browse",
        element:(
         <Browse/>
      //  <Suspense fallback={<HomePageShimmer/>}>
      //   </Suspense>
        )
      },{
        path:"/in/title/:movieId",
        element:(
          <MoviePage/>
        // <Suspense fallback={<MoviePageShimmer/>}>
        // </Suspense>
        )
      },
    ]
  }
])


export default function App() {
  return <RouterProvider router={router}/>
}
