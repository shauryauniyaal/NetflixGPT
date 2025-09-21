import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName;
        const email = user.email;
        const uid = user.uid;
        const photoURL = user.photoURL;

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

  return (
    <div
      className={`absolute justify-between w-full bg-gradient-to-b from-black z-10 flex align-middle ${
        !user && "py-4"
      } items-center`}
    >
      <img
        className={`${!user ? "w-46 mx-50" : "w-30 mx-12 py-2"}`}
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex gap-5 px-20">
          <img
            className="w-9  h-9 rounded-sm"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="text-white cursor-pointer hover:underline font-semibold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
