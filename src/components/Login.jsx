import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("A");

  const handleClick = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const nameValue = isSignIn ? "John Doe" : name.current.value;

    const validateArr = checkValidData(
      email.current.value,
      password.current.value,
      nameValue
    );

    if (validateArr && validateArr.length > 0) {
      if (!isSignIn) {
        // Show all errors for sign up
        setErrorMessage(validateArr);
      } else {
        // Show only email and password errors for sign in
        const signInErrors = validateArr.filter((error, index) => index < 2);
        setErrorMessage(signInErrors);
      }
    } else {
      setErrorMessage(null);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black/85 text-white w-4/12 mx-auto left-0 right-0 my-36 p-15 rounded-md"
      >
        <h1 className="font-bold text-3xl mb-6 mx-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="m-2 my-4 p-4 border-1 border-white/30 bg-white/5 rounded-md w-full"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="m-2 p-4 my-4 border-1 border-white/30 bg-white/5 rounded-md w-full"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="m-2 p-4 my-4 border-1 border-white/30 bg-white/5 rounded-md w-full"
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="m-2 p-4 my-4 border-1 border-white/30 bg-white/5 rounded-md w-full"
          />
        )}
        {errorMessage != null && (
          <p className="text-red-600">{errorMessage.join(" ")}</p>
        )}
        <button
          className="cursor-pointer bg-red-600 p-2 my-4 hover:bg-red-700 transition-all ease-in-out duration-300 font-semibold m- w-full rounded-md m-2"
          onClick={handleSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex py-4 m-2">
          <p className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </p>
          <p
            className="font-semibold hover:underline cursor-pointer"
            onClick={handleClick}
          >
            {isSignIn ? "Sign Up Now." : "Sign In."}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
