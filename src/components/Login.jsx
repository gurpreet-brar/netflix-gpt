import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import getImage from "../utils/profile";
import { HERO } from "../utils/constants";

function Login() {
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm((prev) => !prev);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const message = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm ? name.current.value : undefined
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          const url = getImage();
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: url,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User not found");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen absolute">
        <img
          src={HERO}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <form className="z-30 rounded-md text-white w-11/12 sm:w-6/12 md:w-4/12 max-w-120 bg-black/70 p-12 absolute flex flex-col mx-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md">
        <h1 className="text-2xl font-medium pb-4 mb-4 mt-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="text-sm font-light p-2 mb-6 w-full bg-gray-700/30 border-1 border-white/60 rounded outline-0 placeholder:text-xs  placeholder:text-white/60"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="text-sm font-light p-2 mb-6 w-full bg-gray-700/30 border-1 border-white/60 rounded outline-0 placeholder:text-xs  placeholder:text-white/60 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-sm font-light p-2 w-full  bg-gray-700/30 border-1 border-white/60 rounded outline-0 placeholder:text-xs placeholder:text-white/60 "
        />
        <p className="text-red-500 mt-2 text-xs">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="p-2 my-4 bg-red-700 w-full rounded text-sm cursor-pointer"
          type="submit"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm pb-4">
          <span className="text-white/60 ">
            {isSignInForm ? "New to Netflix?" : "Already registered?"}
          </span>{" "}
          <span className="ml-2  cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "Sign Up" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
