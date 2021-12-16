import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { isCompositeComponentWithType } from "react-dom/test-utils";
// import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
// import About from "./About";



function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>

      {/* <Link style={navStyle} to="./">Home</Link> */}
      {/* <Link style={navStyle} to={{
        pathname: "/.Shop",
        state: "this state",
      }}
      >
        Shop
      </Link> */}
      <Link style={navStyle} to="./">Home</Link>
      <Link style={navStyle} to="./Shop">Shop</Link>







    </nav >
  );
}

export default Nav;
