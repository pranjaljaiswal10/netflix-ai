import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () =>{
  //  const userDetail=useSelector((store)=>store.user)
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{}).catch((error)=>{
      console.error(error)
      navigate("/errot")
    })
  }
  // console.log(userDetail)
  useEffect(()=>{ 
    const unSubscribe=onAuthStateChanged(auth,(user)=>{
    if(user){
      const {uid,displayName,email,photoURL}=auth.currentUser
     dispatch(addUser({
      id:uid,
      userName:displayName,
      email:email,
      userImage:photoURL  
     }))
     navigate("/browse")
    } 
    else{
      dispatch(removeUser())
      navigate("/")
    }
  })
 return ()=>unSubscribe()
  },[])
  return(
   <>
    <img src={LOGO} alt="netflix_logo" className="w-1/6 p-0 m-0 absolute z-10"/>
    <ul>
      <li></li>
      <li>HomePage</li>
      {/* <li>{userDetail.userImage}<button onClick={handleSignOut}></button></li> */}
      
          </ul>
   </>    
  )
}
export default Header;