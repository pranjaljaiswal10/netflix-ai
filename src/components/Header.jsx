import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SEARCH, SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configureSlice";
import { changeOption } from "../utils/optionSlice";
import { toggleSearchBar } from "../utils/searchSlice";
import { FaCaretDown } from "react-icons/fa";
import useOutsideClick from "../utils/hooks/useOutsideClick";

const Header = () => {
  const [isVisisble, setIsVisible] = useState(false);
  const userDetail = useSelector((store) => store.user);
  const search = useSelector((store) => store.search.showSearch);
  const option = useSelector((store) => store.option.searchType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const handleToggle = () => {
    setIsVisible(false);
  };
  const handleButtonToggle = (e) => {
    if (e.target.nodeName !== "IMG" && isVisisble === true) {
      setIsVisible(false);
    }
    setIsVisible(!isVisisble);
  };

  const ref = useOutsideClick(handleToggle);

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
  const handleSearchToggle = () => {
    dispatch(toggleSearchBar());
  };
  const handlelanguagechange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSearchChange = (e) => {
    dispatch(changeOption(e.target.value));
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
    <nav className="fixed  top-0 w-full flex justify-between  z-50 text-white  py-1 px-8  bg-gradient-to-b from-black">
      <Link to="/browse">
        <img src={LOGO} alt="netflix_logo" className="w-36 p-0 m-0  " />
      </Link>

      {userDetail && (
        <button
          onClick={handleButtonToggle}
          ref={ref}
          className="flex pt-2 items-center"
        >
          {isVisisble && <FaCaretDown />}
          <img src={userDetail.userImage} alt="" />
        </button>
      )}

      {isVisisble && userDetail && (
        <ul className="absolute flex items-center flex-col text-sm md:text-base top-20 right-8 w-fit space-y-3 py-4 px-8 rounded-md border border-slate-50 bg-gray-900">
          <li className="border-b border-gray-400">{`Hi! ${userDetail.userName}`}</li>
          {search && movieId == undefined && (
            <>
              <li onClick={(e) => e.stopPropagation()}>
                <select
                  value={option}
                  onChange={handleSearchChange}
                  className="text-black bg-slate-300 hover:text-white hover:bg-neutral-700 p-2 px-5 w-24 rounded cursor-pointer"
                >
                  {SEARCH.map((item) => (
                    <option value={item.value} key={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </li>
              <li onClick={(e) => e.stopPropagation()}>
                <select
                  onChange={handlelanguagechange}
                  className="bg-slate-300 hover:bg-stone-700 hover:text-white text-black p-2 w-24  rounded cursor-pointer"
                >
                  {SUPPORTED_LANGUAGES.map((item) => (
                    <option key={item.identifier} value={item.identifier}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </li>
            </>
          )}
          {movieId == undefined && (
            <li>
              <button
                className="bg-slate-300 hover:bg-indigo-800 hover:text-white text-black p-2 w-24 rounded "
                onClick={handleSearchToggle}
              >
                {search ? "HomePage" : "Search"}
              </button>
            </li>
          )}
          <li>
            <button
              className="bg-slate-300 hover:bg-red-700 text-black hover:text-white p-2  w-24 rounded"
              onClick={handleSignOut}
            >
              SignOut
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Header;
