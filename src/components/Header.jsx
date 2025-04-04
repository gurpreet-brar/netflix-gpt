import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice.js";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggle = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);

  const handleGptClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div
      className="absolute px-8 py-2 z-40  w-screen flex-col sm:flex-row
     flex justify-between items-center"
    >
      <img className="w-44" src={LOGO} />
      {user && (
        <div className="flex md:gap-4 items-center justify-around w-full md:w-auto">
          <button
            className="sm:text-sm text-xs py-1.5 sm:py-2 px-4 text-white bg-purple-500 rounded-md cursor-pointer hover:bg-purple-500/80 active:scale-95"
            onClick={handleGptClick}
          >
            {toggle ? "HomePage" : "GPT Search"}
          </button>
          <div className="flex gap-2">
            <img className="h-6" src={user?.photoURL} />
            <button
              onClick={handleSignOut}
              type="submit"
              className="text-white rounded-sm cursor-pointer text-xs"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
