import React from "react";
import "./Header.css";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function Header(props) {
  const {theme, setTheme} = props
  const ToggleTheme = () =>{
    if(theme === "ligth"){
      setTheme("dark");
    }else{
      setTheme("ligth");
    }
  }

  return (
    <header>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className="thme-container">
        <span>{theme === "ligth" ? <AiFillMoon/> : <AiFillSun/>}</span>
        <span className="icon" onClick={()=>ToggleTheme()}>Punctuate</span>
      </div>
    </header>
  );
}
