import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
        console.log("Redirecting user to browse page ");
        navigate("/browse");
      } else {
        console.log("user redirected to login page");
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
    <div className="absolute px-8 py-2 z-40 bg-gradient-to-b from-black/40 w-screen flex justify-between items-center">
      <img className="w-44" src={LOGO} />
      <div className="flex gap-4">
        <img className="h-6" src={user?.photoURL} />
        {user && (
          <button
            onClick={handleSignOut}
            type="submit"
            className="text-white rounded-sm cursor-pointer"
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
