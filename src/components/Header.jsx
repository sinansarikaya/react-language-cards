import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Image fluid src={logo}></Image>
    </>
  );
};

export default Header;
