import React, { useState } from "react";
import "./sidebar.css";
import Logo from "../../img/logo.png";
import { SidebarData } from "../../data/Data";

const Sidebar = () => {
  //for active class in sidebar
  const [active, setActive]= useState(0);

  
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="app logo" />
        <span>ShoP</span>
      </div>
      <div className="menu">
       {SidebarData.map((item, index)=>{
        return(
            <div data-title={item.heading} className={active===index? "menuItem active": "menuItem"}
             key={index} onClick={()=>{
              setActive(index)}}>
            <item.icon/>
            <span>{item.heading}</span>
        </div>
        )
       
       })}
      </div>
    </div>
  );
};

export default Sidebar;
