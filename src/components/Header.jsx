import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTBar } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configureSlice";

const Header = () =>{
   const userDetail=useSelector((store)=>store.user)
   const gptToggleSearch=useSelector((store)=>store.gpt.showGPT)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((error)=>{
      console.error(error)
      navigate("/error")
    })
  }
 const handleGPTtoggle=()=>{
  dispatch(toggleGPTBar())
 }
 
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
  },[dispatch,navigate])
  return(
   <div className="absolute w-screen flex-row z-10 text-white flex py-2 px-8 justify-between bg-gradient-to-b from-black" >
    <img src={LOGO} alt="netflix_logo" className="w-44 p-0 m-0  "/>
    
    <button className="flex-end" onClick={handleGPTtoggle}>{gptToggleSearch?"HomePage":"GPT"}</button>
      {userDetail&&<button onClick={handleSignOut}><img src={userDetail.userImage} className="rounded mr-4 inline"alt="" /><span>(signOut)</span></button>}
   </div>    
  )
}
export default Header;