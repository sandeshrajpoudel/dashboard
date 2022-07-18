import React from 'react';
import { NavbarData } from '../../data/Data';
import './navbar.css';
const Navbar = () => {
  return (
<div className="Navbar">
        {NavbarData.map((data, index)=>{
            return(
            <li key={index}>
                    <data.icon/>
                    <span className='navspan'>{data.title}</span></li>
            )
        })}
        


</div>  )
}


export default Navbar