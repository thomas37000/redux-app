import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../actions/user";

const SignIn = () => {
  // useDispacth permet de modifier le state dans le payload
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(signIn({ name: "Thomas", age: 40, email: "thomas.chalanson@gmail.com" }));
        }}
      >
        Login
      </button>
    </div>
  );
};

export default SignIn;
