import React, { Component } from "react";
import "../assets/scss/navbar_1.scss";
import { NavLink } from "react-router-dom";

class Navbaralt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>
            <NavLink className="--item" to="/">
              <img
                id="home"
                className="--crystal"
                alt=""
                src={require("../assets/img/crystal_1.png")}
              />
              <span>Home</span>
            </NavLink>
          </li>

          <li id="reg">
            <NavLink className="--item" to="/registration">
              <img
                id="reg"
                className="--crystal"
                alt=""
                src={require("../assets/img/crystal_5.png")}
              />
              <span>Registration</span>
            </NavLink>
          </li>

          <li id="lstats">
            <NavLink className="--item" to="/livestats">
              <img
                className="--crystal"
                alt=""
                src={require("../assets/img/crystal_2.png")}
              />
              <span> Live Stats</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="--item" to="/about">
              <img
                className="--crystal"
                alt=""
                src={require("../assets/img/crystal_3.png")}
              />
              <span>About</span>
            </NavLink>
          </li>

          <li id="hof">
            <NavLink className="--item" to="/halloffame">
              <img
                className="--crystal"
                alt=""
                src={require("../assets/img/crystal_4.png")}
              />
              <span>Hall Of Fame</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbaralt;
