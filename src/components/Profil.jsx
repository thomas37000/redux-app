import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  // avec Redux useSelector remplace useState 
  const user = useSelector((state) => state.user.value);
  return (
    <div>
      <div>Name :{user.name}</div>
      <div>Email :{user.email} </div>
      <div>Age : {user.age}</div>
    </div>
  );
};

export default Profil;
