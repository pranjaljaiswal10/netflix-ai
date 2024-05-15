import { onAuthStateChanged, signOut } from "firebase/auth";
import { LOGO, SEARCH, SUPPORTED_LANGUAGES } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configureSlice";
import { changeOption } from "../utils/optionSlice";
import { toggleSearchBar } from "../utils/searchSlice";

const Header = () => {
  const userDetail = useSelector((store) => store.user);
  const search = useSelector((store) => store.search.showSearch);
  const option= useSelector((store)=>store.option.searchType)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {movieId}=useParams()
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

  const handleSearchChange=(e)=>{
    dispatch(changeOption(e.target.value))
  }
  
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
    <div className="fixed w-screen  z-10 text-white flex py-1 px-8 justify-between bg-gradient-to-b from-black">
      <Link to="/browse">
        <img src={LOGO} alt="netflix_logo" className="w-36 p-0 m-0  " />
      </Link>
      <ul className="flex space-x-4 items-center">
        <li>
          {
            (search && movieId==undefined) && <select value={option} onChange={handleSearchChange} className="bg-gray-900 text-white p-2 rounded cursor-pointer">
            {
             SEARCH.map((item)=><option value={item.value} key={item.label}>{item.label}</option>)
            }
            </select>
          }
        </li>
        <li>
         { (search && movieId===undefined) && <select
            onChange={handlelanguagechange}
            className="bg-gray-900 text-white p-2 rounded"
          >
            {SUPPORTED_LANGUAGES.map((item) => (
              <option key={item.identifier} value={item.identifier}>
                {item.name}
              </option>
            ))}
          </select>
}
        </li>
        {movieId==undefined && <li>
          <button
            className="text-white bg-indigo-700 p-2 rounded "
            onClick={handleSearchToggle}
          >
            {search ?  "Search":"HomePage"}
          </button>
        </li>}
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
