import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="navbar">
        <NavLink to="/" exact activeStyle={{color: 'red'}}>Home</NavLink>
        <br/>
        <NavLink to="/movies" activeStyle={{ color: 'red'}}>Movies</NavLink>
         <br/>
        <NavLink to="/directors" activeStyle={{ color: 'red'}}>Directors</NavLink>
         <br/>
        <NavLink to="/actors" activeStyle={{ color: 'red'}}>Actors</NavLink>
      </div>
  );
};

export default NavBar;
