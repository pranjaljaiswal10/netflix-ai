import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTBar } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configureSlice";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userDetail = useSelector((store) => store.user);
  const gptToggleSearch = useSelector((store) => store.gpt.showGPT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };
  const handleGPTtoggle = () => {
    dispatch(toggleGPTBar());
  };
  const handlelanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            id: uid,
            userName: displayName,
            email: email,
            userImage: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, [dispatch, navigate]);
  return (
    <div className="absolute w-screen flex-row z-10 text-white flex py-1 px-8 justify-between bg-gradient-to-b from-black">
      <Link to="/browse">
        <img src={LOGO} alt="netflix_logo" className="w-36 p-0 m-0  " />
      </Link>
      <ul className="flex space-x-4 items-center">
        <li>
          <select
            onChange={handlelanguagechange}
            className="bg-gray-900 text-white p-2 rounded"
          >
            {SUPPORTED_LANGUAGES.map((item) => (
              <option key={item.identifier} value={item.identifier}>
                {item.name}
              </option>
            ))}
          </select>
        </li>
        <li>
          <button
            className="text-white bg-indigo-700 p-2 rounded"
            onClick={handleGPTtoggle}
          >
            {gptToggleSearch ? "HomePage" : "AISearch"}
          </button>
        </li>
        {userDetail && (
          <li>
            <button onClick={handleSignOut}>
              <img
                src={userDetail.userImage}
                className="rounded inline"
                alt=""
              />
              <span>(signOut)</span>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
export default Header;
