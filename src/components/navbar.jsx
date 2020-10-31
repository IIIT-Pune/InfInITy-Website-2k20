import React from 'react';
import '../assets/scss/navbar.scss';
import {  NavLink } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li className="logo-con">
          <NavLink exact className="--item logo" to="/">
            <img src={require("../assets/img/asset_2.png")} alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink exact className="--item" to="/">
            <img src={require("../assets/img/asset_1.png")} alt="" />
            <div>Home</div>
          </NavLink>
        </li>
        <li>
          <Link className="--item" to="/#registration" aria-current="false">
            <img src={require("../assets/img/asset_4.png")} alt="" />
            <div>Registration</div>
          </Link>
        </li>
        <li>

          <NavLink className="--item" to="/livestats">
            <img src={require("../assets/img/asset_3.png")} alt="" />
            <div>Live Stats</div>
          </NavLink>
        </li>
        <li> 
          <NavLink className="--item" to="/previously">
            <img src={require("../assets/img/asset_6.png")} alt="" />
            <div>Previously</div>
          </NavLink>
        </li>
        <li>
          <NavLink className="--item" to="/halloffame">
            <img src={require("../assets/img/asset_5.png")} alt="" />
            <div>Hall of Fame</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
