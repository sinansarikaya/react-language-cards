import React from "react";
import Image from "react-bootstrap/Image";
import logo from "../assets/react.svg";

const Header = () => {
  return (
    <>
      <Image fluid src={logo} width="250px"></Image>
    </>
  );
};

export default Header;
