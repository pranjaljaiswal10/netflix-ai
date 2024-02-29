import {  useState } from "react";
import { BG_URL, USER_AVATAR } from "../utils/constant";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [isSignInForm, setIsSigInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [form,setForm]=useState({email:"",name:"",password:""})
  const handleFormChange=(e)=>{
    setForm({...form,[e.target.id]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const message=checkValidData(form.email,form.password)
    setErrorMessage(message)
    if(message) return;
  if (!isSignInForm) {
    createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        updateProfile( user,{
   displayName:form.name,
   photoURL:USER_AVATAR
      } ).then(()=>{
        const {uid,email,displayName,photoURL}=auth.currentUser;
        dispatch(addUser({
          id:uid,
          email:email,
          userName:displayName,
          userImage:photoURL
        }))
      });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
        // ..
      });
  } else {
    signInWithEmailAndPassword(
      auth,
     form.email,
     form.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/browse")
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
      });
  }
}
const toggleSignUpForm=()=>{
  setIsSigInForm(!isSignInForm)
}
  return (
    <>
      <Header />
      <img
        src={BG_URL}
        alt=""
        className=" object-cover absolute w-screen h-screen"
      />
      <form onSubmit={handleSubmit} className="relative  m-auto w-3/12 top-40 rounded-md space-y-6 text-white bg-black bg-opacity-80 p-14">
        <h1 className="font-bold text-2xl text-white">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        <input
          type="email"
          className="bg-gray-700 p-4 w-full rounded font-semibold bg-opacity-80 outline-slate-300"
          placeholder="Email" id="email"
          value={form.email} onChange={handleFormChange}
        />
      
        {!isSignInForm && (
          <input
            type="text" id="name"
            className="bg-gray-700 p-4 w-full rounded outline-slate-300"
            placeholder="name"
          value={form.name} onChange={handleFormChange}
          />
        )}
        <input
          type="password"
          className="bg-gray-700 p-4 w-full outline-slate-200 rounded bg-opacity-80"
          name="password" id="password"
          placeholder="Password"
          value={form.password} onChange={handleFormChange}
        />
        <button
          type="submit"
          className=" text-white bg-red-700  font-bold px-6 py-2 w-full rounded-lg"
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        {isSignInForm ? (
          <button className="font-semibold" onClick={toggleSignUpForm}>
            New to Netflix?<span className="hover:underline">Sign Up Now</span>
          </button>
        ) : (
          <button className="font-semibold" onClick={toggleSignUpForm}>
            Already registered?
            <span className="hover:underline">Sign In Now</span>
          </button>
        )}{" "}
      </form>
    </>
  );
};

export default Login;
