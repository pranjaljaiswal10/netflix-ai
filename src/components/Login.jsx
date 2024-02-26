import { useRef, useState } from "react";
import { BG_URL } from "../utils/constant";
import Header from "./Header";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSigInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const password = useRef(null);
  const email = useRef(null);
  const name = useRef(null);
  const auth = getAuth();
  if (!isSignInForm) {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {});
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
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
      });
  }
  return (
    <>
      <Header />
      <img
        src={BG_URL}
        alt=""
        className=" object-cover absolute w-screen h-screen"
      />
      <form className="relative  m-auto w-3/12 top-40 rounded-md space-y-6 text-white bg-black bg-opacity-80 p-14">
        <h1 className="font-bold text-2xl text-white">
          {isSignInForm ? "SignIn" : "SignUp"}
        </h1>
        <input
          type="emai"
          className="bg-gray-700 p-4 w-full rounded font-semibold bg-opacity-80 outline-slate-300"
          placeholder="Email"
          ref={email}
        />
        {!isSignInForm && (
          <input
            type="text"
            className="bg-gray-700 p-4 w-full rounded outline-slate-300"
            placeholder="name"
            ref={name}
          />
        )}
        <input
          type="password"
          className="bg-gray-700 p-4 w-full outline-slate-200 rounded bg-opacity-80"
          name="password"
          placeholder="Password"
          ref={password}
        />
        <button
          type="submit"
          className=" text-white bg-red-700  font-bold px-6 py-2 w-full rounded-lg"
        >
          {isSignInForm ? "SignIn" : "SignUp"}
        </button>
        {isSignInForm ? (
          <button className="font-semibold">
            New to Netflix?<span className="hover:underline">Sign Up Now</span>
          </button>
        ) : (
          <button className="font-semibold">
            Already registered?
            <span className="hover:underline">Sign In Now</span>
          </button>
        )}{" "}
      </form>
    </>
  );
};

export default Login;
