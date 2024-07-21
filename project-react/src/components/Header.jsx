import React from "react";
import Logo from "../image/logo-shopping.png";
import "./Header.css";

//รับ props ที่ถูกส่งมาจาก App
function Header(props) {
  return (
    <nav>
      <img src={Logo} alt="Logo" className="logo" />
      <a href="/">{props.title}</a>
    </nav>
  );
}

export default Header;
