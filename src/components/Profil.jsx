import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  // avec Redux useSelector remplace useState
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    <div style={{backgroundColor: themeColor}}>
      <p> Name: {user.game} </p>
      <p> Email: {user.email}</p>
      <p> Age: {user.age}</p>
    </div>
  );
};

export default Profil;
