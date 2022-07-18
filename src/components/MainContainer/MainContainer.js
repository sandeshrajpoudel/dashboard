import React from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import Table from '../Table/Table';
import './mainContainer.css';

const MainContainer = () => {
  return (
<div className="MainContainer">
    <div className="top">
    <h1>Dashboard</h1> 
    <div className='navbar'><Navbar/></div>
    </div>
    <Cards/>
    <Table/>
    <Table/>


</div>  )
}

export default MainContainer;