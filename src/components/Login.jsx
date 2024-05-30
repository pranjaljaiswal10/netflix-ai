import { useState } from "react";
import { BG_URL, USER_AVATAR } from "../utils/constant";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSigInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = checkValidData(form.email, form.password);
    console.log(message);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: form.name,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  id: uid,
                  email: email,
                  userName: displayName,
                  userImage: photoURL,
                })
              );
            })
            .catch((error) => setErrorMessage(error.message));

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}-${errorMessage}`);
        });
    }
  };
  const toggleSignUpForm = () => {
    setIsSigInForm(!isSignInForm);
  };
  return (
    <div className="relative flex justify-center items-center">
      <img src={BG_URL} alt="" className=" w-screen" />
      <div className=" absolute lg:w-4/12 w-6/12 sm:7/12 md:5/12 lg:my-28  md:my-24 my-48">
        <form
          onSubmit={handleSubmit}
          className="  rounded-md flex flex-col justify-center items-center px-8 py-4 sm:px-12 sm:py-6 lg:px-24 lg:py-10 space-y-4 md:space-y-8 text-white bg-black bg-opacity-80   "
        >
          <h1 className="font-bold text-2xl text-white">
            {isSignInForm ? "SignIn" : "SignUp"}
          </h1>
          <input
            type="text"
            className="bg-gray-700 lg:text-base text-sm py-3 md:px-4 px-3   rounded-md  bg-opacity-80 outline-slate-300 w-full"
            placeholder="Email Address"
            id="email"
            value={form.email}
            onChange={handleFormChange}
          />
          {/* {errorMessage?.email && <p>{errorMessage.email}</p>} */}
          {!isSignInForm && (
            <input
              type="text"
              id="name"
              className="bg-gray-700 lg:text-base text-sm py-3 md:px-4 px-3  rounded-md bg-opacity-80 outline-slate-300 w-full"
              placeholder="Full Name"
              value={form.name}
              onChange={handleFormChange}
            />
          )}
          <input
            type="password"
            className="bg-gray-700 lg:text-base text-sm  py-3 md:px-4 px-3 outline-slate-200 rounded bg-opacity-80 w-full"
            name="password"
            id="password"
            placeholder="Password"
            value={form.password}
            onChange={handleFormChange}
          />
          {/* {errorMessage?.password && <p>{errorMessage.password}</p>} */}
          <button
            type="submit"
            className=" text-white bg-red-700  font-semibold py-2 my-3 w-full rounded-lg"
          >
            {isSignInForm ? "SignIn" : "SignUp"}
          </button>
          {isSignInForm ? (
            <button className="font-semibold" onClick={toggleSignUpForm}>
              New to Netflix?
              <span className="hover:underline">Sign Up Now</span>
            </button>
          ) : (
            <button className="font-semibold" onClick={toggleSignUpForm}>
              Already registered?
              <span className="hover:underline">Sign In Now</span>
            </button>
          )}{" "}
        </form>
      </div>
    </div>
  );
};

export default Login;
