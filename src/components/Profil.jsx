import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  // avec Redux useSelector remplace useState
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <p> Name: {user.name} </p>
      <p> Email: {user.email}</p>
      <p> Age: {user.age}</p>
    </div>
  );
};

export default Profil;
